type AmbientGlowProps = {
  className?: string;
};

export function AmbientGlow({ className = "" }: AmbientGlowProps) {
  return <div className={`ambient-glow ${className}`} aria-hidden="true" />;
}