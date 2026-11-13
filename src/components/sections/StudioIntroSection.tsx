import Link from "next/link";
import { studioProfile } from "@/lib/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Home-page presence for the people behind the work. The review found no
 * named founder anywhere on the site; this band names the lead and links out.
 */
export function StudioIntroSection() {
  const leadFacts = studioProfile.facts.slice(0, 2);

  return (
    <section
      aria-labelledby="studio-intro"
      className="bg-deep-matte py-section-gap-md px-margin-mobile md:px-margin-desktop border-t border-glass-border"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <ScrollReveal className="lg:col-span-5">
          <SectionEyebrow label="THE STUDIO" rule="top" />
          <h2
            id="studio-intro"
            className="font-headline-lg text-headline-lg text-soft-white mt-6 max-w-[18ch]"
          >
            One senior lead on every project, not a rotating team.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {studioProfile.introduction}
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 border-t border-glass-border pt-8">
            {leadFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-label-caps text-label-caps text-outline mb-2">
                  {fact.label.toUpperCase()}
                </dt>
                <dd className="font-body-md text-body-md text-soft-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href="/studio"
            className="mt-10 inline-flex items-center gap-2 font-label-caps text-label-caps text-soft-white border border-glass-border px-6 py-4 rounded hover:bg-white/5 transition-colors"
          >
            Meet the studio
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              arrow_forward
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
