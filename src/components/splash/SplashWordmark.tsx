type SplashWordmarkProps = {
  className?: string;
};

const WORD = "Lenard Designs";

const STAGGER_BASE = 0.1;
const STAGGER_STEP = 0.08;

export function SplashWordmark({ className = "" }: SplashWordmarkProps) {
  return (
    <div className={`splash-logo-container ${className}`}>
      <div className="flex items-baseline justify-center select-none font-sans font-bold text-6xl md:text-7xl lg:text-8xl leading-none text-soft-white tracking-tight [text-shadow:0_0_40px_rgba(245,245,242,0.1)]">
        {WORD.split("").map((char, i) => (
          <span
            key={`${char}-${i}`}
            className={`splash-letter inline-block ${
              char === " " ? "w-[0.42em]" : ""
            }`}
            style={{
              animationDelay: `${STAGGER_BASE + i * STAGGER_STEP}s`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}