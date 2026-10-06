"use client";

import { useEffect, useState } from "react";

const chapters = ["problem", "idea", "result"] as const;

export function ChapterNav() {
  const [active, setActive] = useState<(typeof chapters)[number]>("problem");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as typeof chapters[number]);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    chapters.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Case study chapters" className="sticky top-[72px] z-20 backdrop-blur-[20px] bg-surface/80 border-y border-glass-border">
      <div className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto flex gap-8 py-4 overflow-x-auto">
        {chapters.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "true" : undefined}
            className={`font-label-caps text-label-caps whitespace-nowrap pb-1 min-h-[44px] inline-flex items-center transition-colors ${active === id ? "text-soft-white border-b border-soft-white" : "text-on-surface-variant hover:text-soft-white border-b border-transparent"}`}
          >
            {id === "problem" ? "01 · Problem" : id === "idea" ? "02 · Idea" : "03 · Result"}
          </a>
        ))}
      </div>
    </nav>
  );
}
