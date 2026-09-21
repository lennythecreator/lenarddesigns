"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimationControls } from "framer-motion";
import { PageVisibilityContext } from "./PageVisibilityContext";

/**
 * Swipe-curtain page transition for the Next.js App Router.
 *
 * Two navigation paths:
 * 1. Click via TransitionLink -> navigate() covers curtain (100% -> 0%), then
 *    router.push. The pathname effect sees curtain already covering and only
 *    does swap -> reveal -> fade. Navigation *only* fires after cover.
 * 2. Browser back/forward or direct link -> pathname effect does full
 *    cover -> swap -> reveal -> fade, but visually the swap is still hidden
 *    behind the curtain (deferred displayedChildren).
 *
 * respects prefers-reduced-motion: short-circuits the animation entirely.
 */
const CURTAIN_DURATION = 0.6; // seconds — matches --page-curtain-duration
const EASING: [number, number, number, number] = [0.76, 0, 0.24, 1];

function useReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduced = useReducedMotion();

  // The children currently on screen. Stays as the OLD page until the curtain
  // is closed, so the swap is invisible behind the curtain.
  const [displayedChildren, setDisplayedChildren] = useState(children);

  // Last pathname we actually rendered — gates the "first paint" so the initial
  // page load (SplashScreen -> page) is NOT animated.
  const renderedPathnameRef = useRef(pathname);
  const pendingCoverRef = useRef(false);

  // `true` while the curtain is mid-flight OR content is still fading in.
  const [transitioning, setTransitioning] = useState(false);

  const curtainControls = useAnimationControls();
  const contentControls = useAnimationControls();

  // expose navigate that covers first, then pushes
  const navigate = useCallback(
    async (href: string) => {
      if (href === pathname) return;
      if (transitioning) return;
      if (reduced) {
        router.push(href);
        return;
      }
      pendingCoverRef.current = true;
      setTransitioning(true);
      curtainControls.set({ y: "100%" });
      await curtainControls.start({
        y: "0%",
        transition: { duration: CURTAIN_DURATION, ease: EASING },
      });
      router.push(href);
    },
    [pathname, reduced, transitioning, router, curtainControls]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    curtainControls.set({ y: "-100%" });
    contentControls.set({ opacity: 1 });
  }, [curtainControls, contentControls]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // No-op on first paint (let the SplashScreen -> page handoff breathe).
    if (renderedPathnameRef.current === pathname) return;
    renderedPathnameRef.current = pathname;

    if (reduced) {
      // Reduced: render new children immediately, no curtain.
      // Use microtask to avoid synchronous setState-in-effect lint.
      queueMicrotask(() => setDisplayedChildren(children));
      curtainControls.set({ y: "-100%" });
      contentControls.set({ opacity: 1 });
      return;
    }

    let cancelled = false;

    (async () => {
      if (pendingCoverRef.current) {
        // Click path: curtain already at 0% (covered) via navigate()
        pendingCoverRef.current = false;
        setDisplayedChildren(children);
        contentControls.set({ opacity: 0 });
        await curtainControls.start({
          y: "-100%",
          transition: { duration: CURTAIN_DURATION, ease: EASING },
        });
        if (cancelled) return;
        contentControls.start({
          opacity: 1,
          transition: { duration: 0.6, ease: EASING },
        });
        setTransitioning(false);
        return;
      }

      // Browser nav path: need to cover first
      setTransitioning(true);
      curtainControls.set({ y: "100%" });
      await curtainControls.start({
        y: "0%",
        transition: { duration: CURTAIN_DURATION, ease: EASING },
      });
      if (cancelled) return;

      setDisplayedChildren(children);
      contentControls.set({ opacity: 0 });

      await curtainControls.start({
        y: "-100%",
        transition: { duration: CURTAIN_DURATION, ease: EASING },
      });
      if (cancelled) return;

      contentControls.start({
        opacity: 1,
        transition: { duration: 0.6, ease: EASING },
      });
      setTransitioning(false);
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname, children, reduced, curtainControls, contentControls]);

  // When reduced, always render the live children (no deferred swap)
  const content = reduced ? children : displayedChildren;

  return (
    <PageVisibilityContext.Provider
      value={{ visible: !transitioning, navigate, isTransitioning: transitioning }}
    >
      {/* Curtain overlay — fixed, full-viewport, high z-index, no pointer capture. */}
      <motion.div
        className="page-curtain"
        animate={curtainControls}
        aria-hidden="true"
      />
      {/* Page content — opacity driven by contentControls. */}
      <motion.div className="page-content" animate={contentControls} style={{ width: "100%" }}>
        {content}
      </motion.div>
    </PageVisibilityContext.Provider>
  );
}
