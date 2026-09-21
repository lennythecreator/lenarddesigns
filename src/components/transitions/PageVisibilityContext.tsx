import { createContext, useContext } from "react";

export type TransitionContextValue = {
  /** true when curtain has cleared and content is visible */
  visible: boolean;
  /** Navigate with swipe-curtain: covers first, then pushes route */
  navigate: (href: string) => void;
  /** Whether a curtain transition is currently in flight */
  isTransitioning: boolean;
};

export const PageVisibilityContext = createContext<TransitionContextValue>({
  visible: true,
  navigate: () => {},
  isTransitioning: false,
});

export const usePageVisibility = () => {
  const ctx = useContext(PageVisibilityContext);
  // Back-compat: some consumers only read the boolean
  return ctx.visible;
};

export const useTransition = () => useContext(PageVisibilityContext);
