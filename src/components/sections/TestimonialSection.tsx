import { testimonial } from "@/lib/content";

export function TestimonialSection() {
  return (
    <section className="bg-obsidian-base py-section-gap-md px-margin-mobile md:px-margin-desktop border-y border-glass-border">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-2 hidden lg:block">
          <span className="material-symbols-outlined text-[120px] text-glass-border opacity-20">
            format_quote
          </span>
        </div>
        <div className="lg:col-span-10 flex flex-col justify-center">
          <blockquote className="font-headline-lg text-headline-lg text-soft-white mb-12 max-w-4xl leading-tight">
            {testimonial.quote}
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-glass-border" />
            <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
              {testimonial.attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}