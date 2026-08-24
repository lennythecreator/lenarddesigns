type SplashShapesProps = {
  className?: string;
};

const ROUNDED_TRIANGLE =
  "M 44.85 18.84 Q 50 8 55.15 18.84 L 82.85 77.16 Q 88 88 76 88 L 24 88 Q 12 88 17.15 77.16 Z";

export function SplashShapes({ className = "" }: SplashShapesProps) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
    >
      <svg
        className="splash-shape-float absolute -top-10 -left-10 md:-top-14 md:-left-14 w-24 h-24 md:w-28 md:h-28 text-soft-white/10"
        viewBox="0 0 100 100"
      >
        <rect x="20" y="20" width="60" height="60" rx="18" fill="currentColor" />
      </svg>

      <svg
        className="splash-shape-float absolute -top-14 -right-10 md:-top-16 md:-right-12 w-32 h-32 md:w-40 md:h-40 text-primary/10"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="42" fill="currentColor" />
      </svg>

      <svg
        className="splash-shape-float absolute -bottom-16 -left-10 md:-bottom-20 md:-left-12 w-40 h-40 md:w-48 md:h-48 text-soft-white/10"
        viewBox="0 0 100 100"
      >
        <path d={ROUNDED_TRIANGLE} fill="currentColor" />
      </svg>

      <svg
        className="splash-shape-float absolute -bottom-10 -right-10 md:-bottom-12 md:-right-12 w-20 h-20 md:w-24 md:h-24 text-primary/15"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="42" fill="currentColor" />
      </svg>

      <div className="absolute top-[16%] left-[12%] flex items-center gap-1.5 text-primary/25">
        <span className="w-2 h-2 rounded-full bg-current" />
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      </div>

      <div className="absolute bottom-[18%] right-[14%] flex items-center gap-1.5 text-soft-white/20">
        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
        <span className="w-2.5 h-2.5 rounded-full bg-current" />
      </div>
    </div>
  );
}