import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function PortfolioHeroSection() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto pt-32 pb-section-gap-md">
      <div className="max-w-4xl">
        <SectionEyebrow
          label="01 / Portfolio"
          tone="outline"
          className="mb-6 tracking-[0.2em]"
        />
        <h1 className="font-display-lg-mobile md:font-display-xl text-display-lg-mobile md:text-display-xl text-soft-white mb-8 leading-tight">
          Selected Works
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          A curation of high-fidelity digital experiences, engineering
          sophisticated interfaces that blend visionary aesthetics with robust
          technical architecture.
        </p>
      </div>
    </section>
  );
}