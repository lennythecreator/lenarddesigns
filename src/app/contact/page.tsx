import type { Metadata } from "next";
import Link from "next/link";
import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactInfo } from "@/lib/contact";
import { footerConfigs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Lenard Designs",
  description:
    "Tell us about your project. Lenard Designs is based in Maryland and replies within one business day, Monday to Friday.",
};

const nextSteps = [
  "We read your message and reply within one business day, with questions or a call.",
  "A 30-minute call to understand scope, deadline and who signs off on the work.",
  "A written scope with a fixed fee, dates and deliverables. Nothing starts until you approve it.",
];

export default function ContactPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-obsidian-base px-margin-mobile md:px-margin-desktop pt-32 pb-section-gap-md md:pb-section-gap-lg">
        <div className="max-w-6xl mx-auto">
          <p className="font-label-caps text-label-caps text-surface-tint mb-4">
            Contact
          </p>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-soft-white mb-6">
            Let&apos;s Talk
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">
            Tell us what you&apos;re building, when you need it, and roughly what
            you have in mind to spend. We reply within one business day, Monday
            to Friday.
          </p>
          <p className="font-body-md text-body-md text-outline mb-10">
            {contactInfo.location} · {contactInfo.hours} ·{" "}
            <a
              href={contactInfo.phoneHref}
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              {contactInfo.phone}
            </a>{" "}
            ·{" "}
            <a
              href={contactInfo.emailHref}
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              {contactInfo.email}
            </a>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-7">
              <p className="font-label-caps text-label-caps text-surface-tint mb-4">
                {contactInfo.responseTime.toUpperCase()}
              </p>
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 lg:pl-8 mt-12 lg:mt-0 space-y-10">
              <div>
                <h2 className="font-label-caps text-label-caps text-outline mb-3">
                  WHERE WE ARE
                </h2>
                <p className="font-body-md text-body-md text-soft-white">
                  {contactInfo.location}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Serving {contactInfo.serviceArea}.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                  Studio hours: {contactInfo.hours}.
                </p>
              </div>

              <div>
                <h2 className="font-label-caps text-label-caps text-outline mb-3">
                  WHAT HAPPENS NEXT
                </h2>
                <ol className="space-y-4">
                  {nextSteps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="font-label-caps text-label-caps text-primary pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="font-label-caps text-label-caps text-outline mb-3">
                  DIRECT
                </h2>
                <div className="flex flex-col gap-2">
                  <a
                    href={contactInfo.emailHref}
                    className="font-body-md text-body-md text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                  <a
                    href={contactInfo.phoneHref}
                    className="font-body-md text-body-md text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <p className="font-body-md text-body-md text-outline">
                Your details are used only to reply to this enquiry. Read the{" "}
                <Link
                  href="/privacy"
                  className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
                >
                  privacy policy
                </Link>
                .
              </p>
            </aside>
          </div>
        </div>
      </main>
      <Footer config={footerConfigs.landing} />
    </>
  );
}
