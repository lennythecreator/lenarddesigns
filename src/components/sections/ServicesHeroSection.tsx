import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function ServicesHeroSection() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 z-0 overflow-hidden bg-obsidian-base">
        <video
          src="/Service.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05]"
        />
      </div>
      <div className="relative z-10 max-w-5xl mt-32 md:mt-0">
        <SectionEyebrow label="CAPABILITIES / SERVICES" rule="left" className="mb-8" />
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-soft-white mb-8 [text-shadow:0_2px_24px_rgba(0,0,0,0.65)]">
          The relationship between design and engineering.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          We believe true craftsmanship requires deep knowledge of both the surface and the structure. We don&apos;t just design interfaces; we engineer
          digital environments.
        </p>
      </div>
    </header>
  );
}