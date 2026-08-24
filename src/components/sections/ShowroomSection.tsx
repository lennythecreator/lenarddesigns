import Image from "next/image";
import Link from "next/link";
import { showroomEntry } from "@/lib/content";

export function ShowroomSection() {
  return (
    <section className="py-20 md:py-section-gap-md px-margin-mobile md:px-margin-desktop bg-deep-matte">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 md:mb-16 border-b border-glass-border pb-6 md:pb-8">
          <h2 className="font-headline-lg text-3xl md:text-headline-lg text-soft-white">
            Featured Showroom
          </h2>
          <Link
            href="/projects"
            className="font-label-caps text-label-caps text-primary hover:text-surface-tint transition-colors nav-link-hover"
          >
            View All Work
          </Link>
        </div>
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-lg overflow-hidden group">
          <Image
            src={showroomEntry.image.src}
            alt={showroomEntry.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-obsidian-base/20 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full bg-gradient-to-t from-obsidian-base/95 via-obsidian-base/70 to-transparent">
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between md:gap-0">
              <div className="w-full">
                <span className="font-label-caps text-label-caps text-surface-tint mb-2 md:mb-4 block">
                  {showroomEntry.eyebrow}
                </span>
                <h3 className="font-headline-lg text-2xl md:text-headline-lg text-soft-white">
                  {showroomEntry.title}
                </h3>
              </div>
              <button
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-glass-border bg-obsidian-base/40 hover:bg-soft-white hover:text-obsidian-base transition-colors duration-300"
                aria-label={`View ${showroomEntry.title}`}
              >
                <span className="material-symbols-outlined text-[18px] md:text-[24px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}