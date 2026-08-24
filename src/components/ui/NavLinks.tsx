import Link from "next/link";
import type { NavItem } from "@/lib/content";

type NavLinksProps = {
  items: NavItem[];
  active?: string;
  className?: string;
};

export function NavLinks({ items, active, className = "" }: NavLinksProps) {
  return (
    <div className={`hidden md:flex items-center gap-8 ${className}`}>
{items.map((item) =>
        item.label === active ? (
          <Link
            key={item.label}
            href={item.href}
            className="font-label-caps text-label-caps-link text-primary nav-link-shimmer"
          >
            {item.label}
          </Link>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            className="font-label-caps text-label-caps-link text-on-surface-variant hover:text-primary transition-colors duration-300 nav-link-hover"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}