import { CinematicImage } from "@/components/ui/CinematicImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Project, ProjectDetails } from "@/lib/content";

type Props = { project: Project; details: ProjectDetails };

export function ProjectDetailsHero({ project, details }: Props) {
  const subtitle = details.hero?.subtitle ?? project.description;
  const image = details.hero?.image ?? project.image;
  const proof = details.result.metrics?.[0];

  return (
    <section aria-labelledby="project-title" className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-24 md:pt-32 pb-12 md:pb-16">
      <ScrollReveal>
        <p className="font-label-caps text-label-caps text-on-surface-variant">{project.meta}</p>
        <h1 id="project-title" className="font-display-lg-mobile text-display-lg-mobile md:font-display-xl md:text-display-xl text-soft-white mt-4 max-w-[16ch]">
          {project.title}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 max-w-[60ch]">
          {subtitle}
        </p>
        {proof && (
          <p className="font-label-caps text-label-caps text-soft-white mt-6">
            {proof.value} · {proof.label}
          </p>
        )}
      </ScrollReveal>
      <ScrollReveal delay={120}>
        <div className="mt-12 rounded-lg overflow-hidden cinematic-shadow">
          <CinematicImage src={image.src} alt={image.alt} fill className="aspect-[16/9] md:aspect-[21/9]" priority sizes="100vw" />
        </div>
      </ScrollReveal>
    </section>
  );
}
