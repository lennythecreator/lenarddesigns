import type { Project } from "@/lib/content";

/**
 * The evidence header for a case study: who the work was for, what the studio
 * did and what state the work is in. Rendered directly under the hero.
 */
export function ProjectFacts({ project }: { project: Project }) {
  const rows = [
    { label: "Ownership", value: project.ownership },
    { label: "Client", value: project.client },
    { label: "Our role", value: project.role },
    { label: "Status", value: project.status },
  ];

  return (
    <section
      aria-label="Project facts"
      className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto"
    >
      <dl className="grid gap-x-gutter gap-y-6 border-t border-glass-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="font-label-caps text-label-caps text-outline mb-2">
              {row.label.toUpperCase()}
            </dt>
            <dd className="font-body-md text-body-md text-soft-white">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="font-body-md text-body-md text-on-surface-variant mt-6 max-w-[80ch]">
        {project.proofNote}
      </p>
    </section>
  );
}
