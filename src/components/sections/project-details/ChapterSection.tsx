import { CinematicImage } from "@/components/ui/CinematicImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { ImageAsset } from "@/lib/content";

type Props = {
  id: "problem" | "idea" | "result";
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  insight?: string;
  image?: ImageAsset;
  mirrored?: boolean;
};

export function ChapterSection({ id, eyebrow, title, body, bullets, insight, image, mirrored = false }: Props) {
  const text = (
    <div className="flex flex-col">
      <p className="font-label-caps text-label-caps text-on-surface-variant">{eyebrow}</p>
      <h2 className="font-headline-lg text-headline-lg text-soft-white mt-6 max-w-[20ch]">{title}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-8 max-w-[60ch]">{body}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-8 grid gap-0 font-body-md text-body-md text-on-surface-variant">
          {bullets.map((b, i) => (
            <li key={b} className="flex items-center gap-4 border-b border-glass-border py-4">
              <span className="font-label-caps text-label-caps text-primary">
                {String(i + 1).padStart(3, "0")}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {insight && (
        <blockquote className="mt-8 border-l-2 border-soft-white pl-6 font-body-md text-body-md italic text-soft-white">
          {insight}
        </blockquote>
      )}
    </div>
  );

  const media = image ? (
    <div className="rounded-lg overflow-hidden cinematic-shadow image-reveal">
      <CinematicImage src={image.src} alt={image.alt} fill className="aspect-[16/9]" sizes="(min-width: 1024px) 50vw, 100vw" />
    </div>
  ) : null;

  if (!media) {
    return (
      <section id={id} aria-label={eyebrow} className="scroll-mt-28 px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto mt-section-gap-lg border-t border-glass-border pt-12 md:pt-16">
        <ScrollReveal>{text}</ScrollReveal>
      </section>
    );
  }

  return (
    <section id={id} aria-label={eyebrow} className="scroll-mt-28 px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto mt-section-gap-lg border-t border-glass-border pt-12 md:pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <ScrollReveal className={mirrored ? "lg:col-span-7 lg:order-2" : "lg:col-span-5"}>{text}</ScrollReveal>
        <ScrollReveal delay={120} className={mirrored ? "lg:col-span-5 lg:order-1" : "lg:col-span-7"}>
          {media}
        </ScrollReveal>
      </div>
    </section>
  );
}
