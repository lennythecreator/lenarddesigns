export function LandingHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-section-gap-md md:pb-section-gap-lg px-margin-mobile md:px-margin-desktop">
      <div className="absolute inset-0 z-0 overflow-hidden bg-obsidian-base">
        <video
          src="/Hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05]"
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-end min-h-[60vh]">
        <div className="max-w-4xl">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-xl md:text-display-xl text-soft-white mb-8 cinematic-glow [text-shadow:0_2px_24px_rgba(0,0,0,0.65)]">
            Lead by Design.
            <br />
            Engineering Reality.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
            Lenard Designs pioneers the intersection of visionary aesthetics and
            rigorous technical execution, forging digital experiences that
            define the next era of human-computer interaction.
          </p>
        </div>
      </div>
    </section>
  );
}