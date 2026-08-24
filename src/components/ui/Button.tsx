import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant?: "primary" | "solid" | "ghost" | "pill";
  size?: "md" | "lg" | "icon";
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const variantClasses: Record<string, string> = {
  primary: "bg-soft-white text-obsidian-base rounded hover:bg-surface-tint",
  solid: "bg-soft-white text-obsidian-base rounded hover:bg-surface-tint",
  ghost: "bg-transparent text-primary border border-glass-border rounded hover:bg-soft-white/10",
  pill: "bg-transparent text-soft-white border border-soft-white/20 rounded-full hover:border-soft-white/60 hover:bg-soft-white/5 backdrop-blur-sm",
};

const sizeClasses: Record<string, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
  icon: "w-12 h-12",
};

export function Button({
  variant = "ghost",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `font-label-caps text-label-caps inline-flex items-center justify-center transition-colors duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}