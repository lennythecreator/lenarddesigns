import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalDocumentProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  footerNote?: ReactNode;
};

/**
 * Shared long-form layout for /privacy and /terms, in the site's type system.
 */
export function LegalDocument({
  title,
  updated,
  intro,
  sections,
  footerNote,
}: LegalDocumentProps) {
  return (
    <main className="bg-obsidian-base px-margin-mobile md:px-margin-desktop pt-32 pb-section-gap-md">
      <div className="max-w-3xl mx-auto">
        <p className="font-label-caps text-label-caps text-surface-tint mb-4">
          Legal
        </p>
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-soft-white mb-6">
          {title}
        </h1>
        <p className="font-label-caps text-label-caps text-outline mb-8">
          Last updated {updated}
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {intro}
        </p>

        {sections.map((section) => (
          <section
            key={section.heading}
            className="mt-12 border-t border-glass-border pt-8"
          >
            <h2 className="font-headline-lg text-2xl md:text-[32px] leading-tight text-soft-white mb-4">
              {section.heading}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-body-md text-body-md text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {footerNote && (
          <div className="mt-12 border-t border-glass-border pt-8">
            {footerNote}
          </div>
        )}
      </div>
    </main>
  );
}
