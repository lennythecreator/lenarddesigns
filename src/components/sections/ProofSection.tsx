import Link from "next/link";
import { studioProfile } from "@/lib/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/**
 * Replaces the unattributed testimonial that used to sit on the projects page.
 * Rather than an anonymous quote, it states what a visitor can check and how.
 */
export function ProofSection() {
  return (
    <section
      aria-labelledby="proof-heading"
      className="bg-obsidian-base py-section-gap-md px-margin-mobile md:px-margin-desktop border-y border-glass-border"
    >
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <ScrollReveal className="lg:col-span-5">
          <SectionEyebrow label="VERIFIABLE WORK" rule="top" />
          <h2
            id="proof-heading"
            className="font-headline-lg text-headline-lg text-soft-white mt-6 max-w-[20ch]"
          >
            What you can check before you hire us.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-6 max-w-[46ch]">
            We publish the client, the role we held and how each number was
            measured, including where a result is self-reported.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <ul>
            {studioProfile.proofPoints.map((point, i) => (
              <li
                key={point}
                className="flex gap-5 border-b border-glass-border py-5 first:border-t first:border-glass-border"
              >
                <span className="font-label-caps text-label-caps text-outline pt-1">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="font-body-lg text-body-lg text-soft-white">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-soft-white text-obsidian-base rounded px-6 py-3 font-label-caps text-label-caps hover:bg-surface-tint transition-colors"
            >
              Ask for references
            </Link>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 border border-glass-border rounded px-6 py-3 font-label-caps text-label-caps text-primary hover:bg-soft-white/10 transition-colors"
            >
              Meet the studio
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
