import { CinematicImage } from "@/components/ui/CinematicImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ImageAsset, Testimonial } from "@/lib/content";

type Props = {
  gallery?: ImageAsset[];
  metrics?: { label: string; value: string }[];
  quote?: Testimonial;
};

export function ResultProof({ gallery, metrics, quote }: Props) {
  if (!gallery?.length && !metrics?.length && !quote) return null;
  return (
    <section aria-label="Results and proof" className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-section-gap-md">
      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {gallery.map((img, i) => (
            <ScrollReveal key={`${img.src}-${i}`} delay={i * 120}>
              <div className="rounded-lg overflow-hidden cinematic-shadow image-reveal border border-glass-border">
                <CinematicImage src={img.src} alt={img.alt} fill className="aspect-[4/3]" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
      {metrics && metrics.length > 0 && (
        <ScrollReveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-gutter border-t border-glass-border pt-12">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-2">
              <p className="text-5xl md:text-6xl font-bold tracking-tighter text-soft-white">{m.value}</p>
              <p className="font-label-caps text-label-caps text-on-surface-variant">{m.label}</p>
            </div>
          ))}
        </ScrollReveal>
      )}
      {quote && (
        <ScrollReveal delay={120} className="mt-12 glass-panel rounded-lg p-8 md:p-12">
          <p className="font-body-lg text-body-lg text-soft-white italic">“{quote.quote.replace(/^["“]|["”]$/g, "")}”</p>
          <p className="font-label-caps text-label-caps text-on-surface-variant mt-4">{quote.attribution}</p>
        </ScrollReveal>
      )}
    </section>
  );
}
