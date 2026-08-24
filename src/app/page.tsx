import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { LandingHeroSection } from "@/components/sections/LandingHeroSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { ShowroomSection } from "@/components/sections/ShowroomSection";
import { CTASection } from "@/components/sections/CTASection";
import { footerConfigs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <LandingHeroSection />
        <ApproachSection />
        <ShowroomSection />
        <CTASection />
      </main>
      <Footer config={footerConfigs.landing} />
    </>
  );
}