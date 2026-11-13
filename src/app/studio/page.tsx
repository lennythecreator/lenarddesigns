import type { Metadata } from "next";
import Link from "next/link";
import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { studioProfile, contactInfo, footerConfigs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Studio | Lenard Designs",
  description:
    "Lenard Designs is an independent design and engineering studio in Maryland, with one engineer on every project. Who you work with, how the studio is set up and what you can verify.",
};

export default function StudioPage() {
  const { introduction, member, facts, principles, proofPoints } = studioProfile;

  return (
    <>
      <TopNavBar />
      <main className="bg-obsidian-base">
        <header className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-32 pb-16 md:pb-24">
          <ScrollReveal>
            <SectionEyebrow
              label="STUDIO / MARYLAND"
              rule="left"
              className="mb-8"
            />
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-soft-white max-w-[18ch] mb-8">
              A small studio, and the specialists each project needs.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {introduction}
            </p>
          </ScrollReveal>
        </header>

        <section
          aria-labelledby="member-heading"
          className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pb-section-gap-md border-t border-glass-border pt-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <ScrollReveal className="lg:col-span-5">
              <div
                role="img"
                aria-label={`Monogram plate for ${member.name}`}
                className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-lg border border-glass-border bg-deep-matte cinematic-shadow"
              >
                <span
                  aria-hidden="true"
                  className="font-display-lg text-display-lg text-soft-white/90"
                >
                  {member.monogram}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-6 h-[1px] bg-glass-border"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120} className="lg:col-span-6 lg:col-start-7">
              <h2
                id="member-heading"
                className="font-headline-lg text-headline-lg text-soft-white"
              >
                {member.name}
              </h2>
              <p className="font-label-caps text-label-caps text-surface-tint mt-3">
                {member.role.toUpperCase()}
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                {member.bio}
              </p>
              <dl className="mt-10 grid gap-x-gutter gap-y-6 sm:grid-cols-2 border-t border-glass-border pt-8">
                {facts.map((fact) => (
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
            </ScrollReveal>
          </div>
        </section>

        <section
          aria-labelledby="principles-heading"
          className="bg-deep-matte border-y border-glass-border py-section-gap-md px-margin-mobile md:px-margin-desktop"
        >
          <div className="max-w-[1920px] mx-auto">
            <ScrollReveal>
              <SectionEyebrow label="HOW WE WORK" rule="top" />
              <h2
                id="principles-heading"
                className="font-headline-lg text-headline-lg text-soft-white mt-6 max-w-[24ch]"
              >
                Three commitments that show up in every engagement.
              </h2>
            </ScrollReveal>
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {principles.map((principle, i) => (
                <ScrollReveal key={principle.title} delay={i * 100}>
                  <div className="h-full border-t border-glass-border pt-6">
                    <span className="font-label-caps text-label-caps text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-body-lg text-body-lg text-soft-white mt-5 mb-3">
                      {principle.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {principle.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="proof-heading"
          className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto py-section-gap-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <ScrollReveal className="lg:col-span-5">
              <SectionEyebrow label="WHAT YOU CAN VERIFY" rule="top" />
              <h2
                id="proof-heading"
                className="font-headline-lg text-headline-lg text-soft-white mt-6 max-w-[18ch]"
              >
                Claims we can back with a document.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-6">
                {contactInfo.location} · {contactInfo.responseTime}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={120} className="lg:col-span-6 lg:col-start-7">
              <ul>
                {proofPoints.map((point, i) => (
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
                  href="/projects"
                  className="inline-flex items-center gap-2 border border-glass-border rounded px-6 py-3 font-label-caps text-label-caps text-primary hover:bg-soft-white/10 transition-colors"
                >
                  Read the case studies
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer config={footerConfigs.landing} />
    </>
  );
}
