import { approachItems } from "@/lib/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ApproachSection() {
  return (
    <section className="py-section-gap-md px-margin-mobile md:px-margin-desktop bg-obsidian-base">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-16">
            <SectionEyebrow label="OUR APPROACH" rule="top" />
          </div>
        </ScrollReveal>
        <div className="flex flex-col gap-24 md:gap-32">
          {approachItems.map((item, i) => {
            const isLast = i === approachItems.length - 1;
            return (
              <ScrollReveal key={item.index} delay={i * 120}>
                <div
                  className={`relative border-t border-glass-border pt-8 ${
                    isLast ? "border-b pb-8" : ""
                  }`}
                >
                  <div className="flex flex-col gap-6">
                    <span className="font-label-caps text-label-caps text-primary opacity-50">
                      {item.index}
                    </span>
                    <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-soft-white">
                      {item.title}
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}