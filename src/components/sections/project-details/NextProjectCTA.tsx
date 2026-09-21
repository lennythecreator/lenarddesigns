import Link from "next/link";
import { projects } from "@/lib/content";

export function NextProjectCTA({ currentId }: { currentId: string }) {
  const idx = projects.findIndex((p) => p.id === currentId);
  const next = projects[(idx + 1) % projects.length];
  if (!next || next.id === currentId) return null;
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-section-gap-lg pb-section-gap-lg border-t border-glass-border mt-section-gap-lg">
      <p className="font-label-caps text-label-caps text-outline">Next project</p>
      <Link href={`/projects/${next.id}`} className="group mt-4 flex items-center justify-between gap-gutter">
        <h2 className="font-display-lg text-display-lg text-soft-white group-hover:opacity-80 transition-opacity">{next.title}</h2>
        <span className="material-symbols-outlined text-soft-white text-[32px] group-hover:translate-x-2 transition-transform">arrow_forward</span>
      </Link>
      <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-[60ch]">{next.meta}</p>
    </section>
  );
}
