import Link from "next/link";
import type { FooterConfig as FooterConfigType } from "@/lib/content";
import { BrandLogo } from "./BrandLogo";

type FooterProps = {
  config: FooterConfigType;
};

export function Footer({ config }: FooterProps) {
  if (config.variant === "landing") {
    return (
      <footer className="bg-deep-matte w-full py-section-gap-md border-t border-glass-border">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop w-full mx-auto max-w-7xl">
          <BrandLogo mode="watermark" />
          <div className="flex flex-col items-center md:items-end gap-8 z-10">
            <div className="flex gap-6">
              {config.links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="font-label-caps text-label-caps text-on-surface-variant">
              {config.copyright}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (config.variant === "project") {
    return (
      <footer className="bg-obsidian-base w-full border-t border-glass-border">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 gap-gutter max-w-[1920px] mx-auto">
          <div className="font-label-caps text-label-caps text-soft-white opacity-50">
            Lenard Designs
          </div>
          <div className="flex gap-8 font-body-md text-body-md">
            {config.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-on-surface-variant hover:text-soft-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant">
            {config.copyright}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full py-section-gap-md border-t border-glass-border bg-[#15171A]">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto">
        <div className="font-display-lg text-body-md text-primary mb-8 md:mb-0">
          LENARD DESIGNS
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          {config.links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="font-label-caps text-label-caps text-soft-white">
          {config.copyright}
        </div>
      </div>
    </footer>
  );
}