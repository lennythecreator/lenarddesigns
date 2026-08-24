export function LandingHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-section-gap-md md:pb-section-gap-lg px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/Hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-base via-obsidian-base/50 to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end min-h-[60vh]">
        <div className="max-w-4xl">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-xl md:text-display-xl text-soft-white mb-8 cinematic-glow">
            Lead by Design.
            <br />
            Engineering Reality.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Lenard Designs pioneers the intersection of visionary aesthetics and
            rigorous technical execution, forging digital experiences that
            define the next era of human-computer interaction.
          </p>
        </div>
      </div>
    </section>
  );
}