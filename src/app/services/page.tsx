import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { ServicesHeroSection } from "@/components/sections/ServicesHeroSection";
import { ServicePillar } from "@/components/sections/ServicePillar";
import { footerConfigs, servicePillars } from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      <TopNavBar />
      <ServicesHeroSection />
      <main className="relative z-10 px-margin-mobile md:px-margin-desktop pb-section-gap-lg space-y-section-gap-md md:space-y-section-gap-lg">
        {servicePillars.map((pillar) => (
          <ServicePillar key={pillar.id} pillar={pillar} />
        ))}
        <AmbientGlow />
      </main>
      <Footer config={footerConfigs.services} />
    </>
  );
}