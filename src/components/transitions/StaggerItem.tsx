"use client";

import { motion } from "framer-motion";

/**
 * StaggerItem — a single entrance element. Wrap hero headings, images,
 * paragraphs, CTAs, etc. inside a <StaggerContainer>. They fade + slide up in
 * sequence when the curtain clears.
 *
 * Easing mirrors the curtain: cubic-bezier(0.76, 0, 0.24, 1).
 */
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
} as const;

export function StaggerItem({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      className={className}
      variants={staggerItemVariants}
      initial="hidden"
      {...rest}
    >
      {children}
    </motion.div>
  );
}
