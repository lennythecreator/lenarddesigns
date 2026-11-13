import { processSteps, engagementNotes } from "@/lib/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Process and billing model. Sits on the services page directly
 * under the hero so a buyer can see how an engagement runs before the
 * individual capabilities.
 */
export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="py-section-gap-md border-t border-glass-border"
    >
      <ScrollReveal>
        <SectionEyebrow label="HOW A PROJECT RUNS" rule="top" />
        <h2
          id="process-heading"
          className="font-headline-lg text-headline-lg text-soft-white mt-6 max-w-[22ch]"
        >
          A written scope, weekly builds and a fixed end date.
        </h2>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {processSteps.map((step, i) => (
          <ScrollReveal key={step.index} delay={i * 90}>
            <div className="flex h-full flex-col border-t border-glass-border pt-6">
              <div className="font-label-caps text-label-caps text-primary">
                {step.index}
              </div>
              <h3 className="font-body-lg text-body-lg text-soft-white mt-6 mb-3">
                {step.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={120}>
        <div className="mt-14 glass-panel rounded-lg p-6 md:p-8">
          <p className="font-label-caps text-label-caps text-surface-tint mb-4">
            PRICING AND BILLING
          </p>
          <ul className="space-y-3">
            {engagementNotes.map((note) => (
              <li
                key={note}
                className="flex gap-3 font-body-md text-body-md text-on-surface-variant"
              >
                <span aria-hidden="true" className="text-primary">
                  ·
                </span>
                {note}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  );
}
