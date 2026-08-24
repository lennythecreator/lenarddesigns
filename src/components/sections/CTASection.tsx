import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-section-gap-lg px-margin-mobile md:px-margin-desktop bg-obsidian-base flex flex-col items-center justify-center text-center">
      <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-xl md:text-display-xl text-soft-white mb-12 cinematic-glow">
        Envision Tomorrow.
        <br />
        Launch Today.
      </h2>
      <Button variant="primary" size="lg" href="#" className="tracking-widest">
        LET&apos;S TALK
      </Button>
    </section>
  );
}