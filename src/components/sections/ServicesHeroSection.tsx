import Image from "next/image";
import { heroImageServices } from "@/lib/content";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function ServicesHeroSection() {
  return (
    <header className="relative min-h-screen flex items-center pt-20 px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImageServices.src}
          alt={heroImageServices.alt}
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-base/50 via-obsidian-base/80 to-obsidian-base" />
      </div>
      <div className="relative z-10 max-w-5xl mt-32 md:mt-0">
        <SectionEyebrow
          label="CAPABILITIES / SERVICES"
          rule="left"
          className="mb-8"
        />
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-soft-white mb-8">
          The relationship between design and engineering.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          We believe true craftsmanship requires deep knowledge of both the
          surface and the structure. We don&apos;t just design interfaces; we
          engineer digital environments.
        </p>
      </div>
    </header>
  );
}