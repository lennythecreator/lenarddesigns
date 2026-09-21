import { CinematicImage } from "@/components/ui/CinematicImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ImageAsset } from "@/lib/content";

export function SplitShowGallery({ images }: { images: ImageAsset[] }) {
  if (!images || images.length === 0) return null;
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-section-gap-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {images.map((img, i) => (
          <ScrollReveal key={`${img.src}-${i}`} delay={i * 120}>
            <div className="rounded-lg overflow-hidden cinematic-shadow image-reveal border border-glass-border">
              <CinematicImage src={img.src} alt={img.alt} fill className="aspect-[4/3] md:aspect-[16/10]" sizes="(min-width: 768px) 50vw, 100vw" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
