import type { Metadata } from "next";
import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactInfo } from "@/lib/contact";
import { footerConfigs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Lenard Designs",
};

export default function ContactPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-obsidian-base px-margin-mobile md:px-margin-desktop pt-32 pb-section-gap-md md:pb-section-gap-lg">
        <div className="max-w-4xl mx-auto">
          <p className="font-label-caps text-label-caps text-surface-tint mb-4">
            Contact
          </p>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-soft-white mb-6 ">
            Let&apos;s Talk
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
            Tell us about your project and we&apos;ll get back to you shortly.
            Reach us directly at{" "}
            <a
              href={contactInfo.emailHref}
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              {contactInfo.email}
            </a>{" "}
            or{" "}
            <a
              href={contactInfo.phoneHref}
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              {contactInfo.phone}
            </a>
            .
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer config={footerConfigs.landing} />
    </>
  );
}
