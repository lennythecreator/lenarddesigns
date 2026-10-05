import Link from "next/link";

export function LandingHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-section-gap-md md:pb-section-gap-lg px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 z-0 overflow-hidden bg-obsidian-base">
        <video
          src="/Hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/Zizi.png"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05] motion-reduce:hidden"
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end min-h-[60vh]">
        <div className="max-w-4xl">
          <p className="font-label-caps text-label-caps text-surface-tint mb-6">
            Diaspora PropTech · Accessibility Auditing · &lt;30s Results
          </p>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-xl md:text-display-xl text-soft-white mb-8 cinematic-glow [text-shadow:0_2px_24px_rgba(0,0,0,0.65)]">
            Lead by Design.
            <br />
            Engineering Reality.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface max-w-2xl [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            Great design and solid engineering rarely come from the same place.
            Lenard Designs is built to deliver both.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="font-label-caps text-label-caps inline-flex items-center justify-center px-8 py-4 bg-soft-white text-obsidian-base rounded hover:bg-surface-tint transition-colors duration-300"
            >
              View Selected Work
            </Link>
            <Link
              href="/services"
              className="font-label-caps text-label-caps inline-flex items-center justify-center px-8 py-4 bg-transparent text-primary border border-glass-border rounded hover:bg-soft-white/10 transition-colors duration-300"
            >
              Our Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}