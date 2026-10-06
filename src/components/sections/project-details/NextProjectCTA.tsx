import Link from "next/link";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { projects } from "@/lib/content";

export function NextProjectCTA({ currentId }: { currentId: string }) {
  const idx = projects.findIndex((p) => p.id === currentId);
  const next = projects[(idx + 1) % projects.length];
  if (!next || next.id === currentId) return null;
  return (
    <section aria-label="Continue exploring" className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto mt-section-gap-lg border-t border-glass-border pt-12 md:pt-16 pb-16 md:pb-24">
      <p className="font-label-caps text-label-caps text-on-surface-variant">Next project</p>
      <Link href={`/projects/${next.id}`} className="group mt-4 flex items-center justify-between gap-gutter">
        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-soft-white group-hover:opacity-80 transition-opacity">{next.title}</h2>
        <span aria-hidden="true" className="material-symbols-outlined text-soft-white text-[32px] group-hover:translate-x-2 transition-transform">arrow_forward</span>
      </Link>
      <div className="mt-6 w-full max-w-md rounded-lg overflow-hidden cinematic-shadow border border-glass-border">
        <CinematicImage src={next.image.src} alt="" fill className="aspect-[21/9]" sizes="(min-width: 768px) 40vw, 100vw" />
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-[60ch]">{next.meta}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/projects"
          className="font-label-caps text-label-caps inline-flex items-center justify-center px-8 py-4 bg-transparent text-primary border border-glass-border rounded hover:bg-soft-white/10 transition-colors duration-300"
        >
          Back to all work
        </Link>
        <Link
          href="/contact"
          className="font-label-caps text-label-caps inline-flex items-center justify-center px-8 py-4 bg-soft-white text-obsidian-base rounded hover:bg-surface-tint transition-colors duration-300"
        >
          Start yours
        </Link>
      </div>
    </section>
  );
}
