"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { usePageVisibility } from "./PageVisibilityContext";

/**
 * StaggerContainer — wraps a group of key page elements (hero heading, image,
 * CTA, etc.) and orchestrates a staggered entrance once the page-transition
 * curtain has cleared.
 *
 * Stagger delay defaults to --page-stagger-delay (80ms) but can be overridden
 * via staggerDelayMs. Each child <StaggerItem> inherits the "visible"/"hidden"
 * variant state, so staggerChildren delays them in sequence automatically.
 */
export function StaggerContainer({
  children,
  className,
  staggerDelayMs = 80,
}: {
  children: React.ReactNode;
  className?: string;
  /** Override the default --page-stagger-delay (ms). */
  staggerDelayMs?: number;
}) {
  const variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelayMs / 1000, // framer-motion wants seconds
        delayChildren: 0,
      },
    },
  };

  const controls = useAnimationControls();
  const visible = usePageVisibility();

  useEffect(() => {
    if (visible) {
      controls.start("visible");
    } else {
      controls.set("hidden");
    }
  }, [visible, controls]);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
