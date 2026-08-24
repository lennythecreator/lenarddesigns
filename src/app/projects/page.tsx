import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PortfolioHeroSection } from "@/components/sections/PortfolioHeroSection";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { footerConfigs } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <>
      <TopNavBar />
      <main>
        <ScrollReveal>
          <PortfolioHeroSection />
        </ScrollReveal>
        <ProjectShowcase />
        <ScrollReveal>
          <TestimonialSection />
        </ScrollReveal>
      </main>
      <Footer config={footerConfigs.project} />
    </>
  );
}