"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import { useTransition } from "./PageVisibilityContext";

type TransitionLinkProps = Omit<LinkProps, "href"> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
};

/**
 * Drop-in replacement for next/link that respects the swipe curtain.
 * - Keeps Next's prefetch (not disabled)
 * - For internal navigations: waits until curtain has fully covered (y: 0%)
 *   before calling router.push — so the route change is only visible after
 *   the screen is covered. Falls back to normal navigation if
 *   prefers-reduced-motion is set or curtain is already covering.
 */
export function TransitionLink({
  href,
  children,
  onClick,
  target,
  rel,
  prefetch = true,
  ...rest
}: TransitionLinkProps & { prefetch?: boolean }) {
  const { navigate, isTransitioning } = useTransition();

  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    if (isExternal) return;
    if (target === "_blank") return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (isTransitioning) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} prefetch={prefetch} target={target} rel={rel} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
