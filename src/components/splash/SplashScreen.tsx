"use client";

import { useCallback, useEffect, useState } from "react";
import { SplashWordmark } from "./SplashWordmark";
import { WebGLBackground } from "./WebGLBackground";

const STING_DURATION = 2400;
const FADE_DURATION = 500;

export function SplashScreen() {
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  const dismiss = useCallback(() => setLeaving(true), []);

  useEffect(() => {
    const t = setTimeout(dismiss, STING_DURATION);
    return () => clearTimeout(t);
  }, [dismiss]);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(() => setHidden(true), FADE_DURATION);
    return () => clearTimeout(t);
  }, [leaving]);

  useEffect(() => {
    if (hidden) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [hidden]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dismiss]);

  if (hidden) return null;

  return (
    <div
      className={`splash-root fixed inset-0 z-[100] bg-obsidian-base text-soft-white overflow-hidden flex flex-col justify-center items-center ${
        leaving ? "splash-leaving" : ""
      }`}
    >
      <WebGLBackground />
      <div className="splash-stage relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-margin-mobile md:px-margin-desktop">
        <SplashWordmark className="w-full max-w-4xl" />
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Skip intro"
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 z-20 text-[11px] font-bold uppercase tracking-[0.18em] text-soft-white/60 hover:text-soft-white focus-visible:text-soft-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-soft-white transition-colors duration-200"
      >
        Skip
      </button>
    </div>
  );
}
