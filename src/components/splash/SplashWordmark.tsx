type SplashWordmarkProps = {
  className?: string;
};

export function SplashWordmark({ className = "" }: SplashWordmarkProps) {
  return (
    <div className={`splash-wordmark ${className}`} aria-hidden="true">
      <p className="splash-word">
        <span className="splash-anchor splash-anchor-l">L</span>
        <span className="splash-rest">ENARD&nbsp;</span>
        <span className="splash-anchor splash-anchor-d">D</span>
        <span className="splash-rest">ESIGNS</span>
        <span className="splash-dot" />
      </p>
    </div>
  );
}
