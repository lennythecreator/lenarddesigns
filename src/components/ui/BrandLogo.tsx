import Link from "next/link";

type BrandLogoProps = {
  variant?: "landing" | "project" | "services";
  mode?: "header" | "watermark";
  href?: string;
};

const headerClasses: Record<string, string> = {
  landing:
    "font-display-lg-mobile font-bold text-2xl md:font-headline-lg md:text-headline-lg tracking-tighter whitespace-nowrap text-primary",
  project:
    "font-display-lg-mobile text-display-lg-mobile font-bold tracking-tighter text-soft-white",
  services: "font-display-lg text-body-md tracking-tighter text-primary",
};

const headerText: Record<string, string> = {
  landing: "LENARD DESIGNS",
  project: "Lenard Designs",
  services: "LENARD DESIGNS",
};

export function BrandLogo({
  variant = "landing",
  mode = "header",
  href,
}: BrandLogoProps) {
  if (mode === "watermark") {
    return (
      <div className="font-display-lg text-display-lg text-primary opacity-10 hidden md:block pointer-events-none select-none">
        LENARD DESIGNS
      </div>
    );
  }

  const className = headerClasses[variant];
  const label = headerText[variant];

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return <div className={className}>{label}</div>;
}