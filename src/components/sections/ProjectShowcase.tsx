import Link from "next/link";
import { projects } from "@/lib/content";
import type { Project } from "@/lib/content";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ProjectShowcase() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pb-section-gap-lg flex flex-col gap-section-gap-md">
      {projects.map((project) => (
        <ScrollReveal key={project.id}>
          <ProjectCard project={project} />
        </ScrollReveal>
      ))}
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const info = (
    <>
      <div>
        <p className="font-label-caps text-label-caps text-outline mb-4">
          {project.meta}
        </p>
        <h2 className="font-headline-lg text-headline-lg text-soft-white mb-6">
          {project.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {project.description}
        </p>
      </div>
      <div className="mt-8">
        <Link
          href={project.href}
          className="inline-flex items-center gap-2 text-soft-white font-label-caps text-label-caps border border-glass-border px-6 py-4 rounded hover:bg-white/5 transition-colors"
        >
          Explore Case Study{" "}
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </div>
    </>
  );

  const image = (
    <div className="cinematic-shadow rounded-lg overflow-hidden image-reveal">
      <CinematicImage
        src={project.image.src}
        alt={project.image.alt}
        fill
        className="aspect-[4/3] md:aspect-[16/9]"
      />
    </div>
  );

  if (project.layout === "right") {
    return (
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center border-t border-glass-border pt-12">
        <div className="lg:col-span-8">{image}</div>
        <div className="lg:col-span-4 flex flex-col gap-6 lg:pl-12">{info}</div>
      </article>
    );
  }

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center border-t border-glass-border pt-12">
      <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-6">
        {info}
      </div>
      <div className="lg:col-span-8 order-1 lg:order-2">{image}</div>
    </article>
  );
}