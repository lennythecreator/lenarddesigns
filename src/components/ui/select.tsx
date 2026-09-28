"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

// shadcn-style Select, themed with Lenard Designs (Obsidian Cinematic) tokens.

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "w-full rounded-lg border border-glass-border bg-deep-matte px-4 py-3 font-body-md text-body-md text-soft-white outline-none transition-colors duration-300 focus:border-soft-white/40 data-[placeholder]:text-on-surface-variant/50 flex items-center justify-between gap-2 [&>span]:line-clamp-1",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <span className="material-symbols-outlined text-[20px] text-on-surface-variant">
          keyboard_arrow_down
        </span>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-glass-border bg-obsidian-base text-soft-white shadow-xl",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          data-slot="select-viewport"
          className={cn(
            "p-1",
            position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2.5 font-body-md text-body-md text-on-surface-variant outline-none transition-colors duration-200 hover:bg-soft-white/10 hover:text-soft-white focus:bg-soft-white/10 focus:text-soft-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-soft-white",
        className
      )}
      {...props}
    >
      {children}
      <span className="ml-auto flex h-4 w-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <span className="material-symbols-outlined text-[18px]">check</span>
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
