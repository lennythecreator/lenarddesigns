import { CinematicImage } from "@/components/ui/CinematicImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ImageAsset, Metric } from "@/lib/content";

type Props = {
  gallery?: ImageAsset[];
  metrics?: Metric[];
  measurement?: string;
};

export function ResultProof({ gallery, metrics, measurement }: Props) {
  if (!gallery?.length && !metrics?.length && !measurement) return null;

  return (
    <section
      aria-label="Results and proof"
      className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-section-gap-md"
    >
      {gallery && gallery.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {gallery.map((img, i) => (
            <ScrollReveal key={`${img.src}-${i}`} delay={i * 120}>
              <div className="rounded-lg overflow-hidden cinematic-shadow image-reveal border border-glass-border">
                <CinematicImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="aspect-[4/3]"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}

      {metrics && metrics.length > 0 && (
        <ScrollReveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-gutter border-t border-glass-border pt-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-2">
              <p className="text-5xl md:text-6xl font-bold tracking-tighter text-soft-white">
                {metric.value}
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant">
                {metric.label.toUpperCase()}
              </p>
              <p className="font-body-md text-body-md text-outline mt-1 max-w-[42ch]">
                {metric.source}
              </p>
            </div>
          ))}
        </ScrollReveal>
      )}

      {measurement && (
        <ScrollReveal
          delay={120}
          className="mt-12 rounded-lg border border-glass-border bg-deep-matte p-6 md:p-8"
        >
          <p className="font-label-caps text-label-caps text-surface-tint mb-4">
            HOW THESE NUMBERS WERE MEASURED
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[80ch]">
            {measurement}
          </p>
        </ScrollReveal>
      )}
    </section>
  );
}
