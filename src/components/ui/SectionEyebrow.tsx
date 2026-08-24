type SectionEyebrowProps = {
  label: string;
  rule?: "none" | "top" | "left";
  tone?: "on-surface-variant" | "outline" | "primary";
  className?: string;
};

const toneClasses: Record<string, string> = {
  "on-surface-variant": "text-on-surface-variant",
  outline: "text-outline",
  primary: "text-primary",
};

export function SectionEyebrow({
  label,
  rule = "none",
  tone = "on-surface-variant",
  className = "",
}: SectionEyebrowProps) {
  if (rule === "top") {
    return (
      <span
        className={`font-label-caps text-label-caps ${toneClasses[tone]} tracking-widest uppercase border-t border-glass-border pt-4 block w-12 ${className}`}
      >
        {label}
      </span>
    );
  }

  if (rule === "left") {
    return (
      <div
        className={`font-label-caps text-label-caps ${toneClasses[tone]} flex items-center gap-4 ${className}`}
      >
        <span className="w-12 h-[1px] bg-glass-border block" />
        {label}
      </div>
    );
  }

  return (
    <p
      className={`font-label-caps text-label-caps ${toneClasses[tone]} uppercase ${className}`}
    >
      {label}
    </p>
  );
}