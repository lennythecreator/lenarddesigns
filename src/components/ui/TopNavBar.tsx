"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";
import { BrandLogo } from "./BrandLogo";
import { NavLinks } from "./NavLinks";
import { MobileMenuButton } from "./MobileMenuButton";
import { Button } from "./Button";

const ACTIVE_BY_PATH: Record<string, string> = {
  "/": "Work",
  "/projects": "Projects",
  "/services": "Services",
};

export function TopNavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeLabel = ACTIVE_BY_PATH[pathname];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-glass-border">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full mx-auto max-w-[1920px]">
        <BrandLogo href="/" />
        <NavLinks items={navItems} active={activeLabel} />
        <div className="flex items-center gap-4">
          <div className="hidden md:inline-flex">
            <Button href="#" variant="ghost" size="md">
              Let&apos;s Talk
            </Button>
          </div>
          <MobileMenuButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </div>
      {open && (
        <div className="absolute top-full left-0 w-full border-t border-glass-border bg-background/90 backdrop-blur-xl px-margin-mobile py-6 md:px-margin-desktop md:hidden flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-label-caps text-label-caps-link ${
                activeLabel === item.label
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary transition-colors duration-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}