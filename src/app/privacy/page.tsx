import type { Metadata } from "next";
import Link from "next/link";
import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { LegalDocument } from "@/components/ui/LegalDocument";
import type { LegalSection } from "@/components/ui/LegalDocument";
import { contactInfo, footerConfigs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Lenard Designs",
  description:
    "What the Lenard Designs contact form collects, why it is collected, where it is stored and how to have it deleted.",
};

const sections: LegalSection[] = [
  {
    heading: "What this site collects",
    paragraphs: [
      "The only personal data this site collects is what you type into the contact form: your name, email address, the service you select, your message, and whether you ticked the consent box. The form also records when the enquiry was received.",
      "It does not ask for your postal address, payment details or phone number. If you choose to write those into the message yourself, they are stored with the message.",
      "The site does not run advertising pixels or behavioural analytics, and it does not set marketing cookies.",
    ],
  },
  {
    heading: "Why we collect it",
    paragraphs: [
      "Your details are used to reply to your enquiry and, if we go on to work together, to prepare a scope and a quote. We do not sell data, rent it, or use your message for a mailing list you did not ask for.",
      "You give consent by ticking the box before sending. The form will not submit without it.",
    ],
  },
  {
    heading: "Where it is stored and who sees it",
    paragraphs: [
      "Enquiries are written to a server-side log controlled by Lenard Designs. When email delivery is configured, the enquiry is also sent to the studio inbox through an email provider.",
      "Access is limited to the studio. Our hosting provider processes the request on our behalf and does not receive the form contents beyond normal request handling.",
    ],
  },
  {
    heading: "Third-party requests",
    paragraphs: [
      "Pages load an icon font from Google Fonts, which means Google receives your IP address when a page loads. Project images and video are served from this site.",
      "There are no social embeds, comment systems or tracking pixels on the site.",
    ],
  },
  {
    heading: "How long it is kept",
    paragraphs: [
      "Enquiries are kept for up to 24 months so that a conversation can be picked up later, then deleted. Where you become a client, project records are kept for the length of the working relationship and for any period a legal or accounting obligation requires.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      `Write to ${contactInfo.email} to ask for a copy of what we hold about you, to correct it, or to have it deleted. We reply within one business day and delete records within 30 days unless we are required to retain them by law.`,
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "The site is aimed at businesses and is not directed at anyone under 16. We do not knowingly collect data from children.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "If this policy changes, the date at the top of the page changes with it. A material change to how enquiries are handled will be noted on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <TopNavBar />
      <LegalDocument
        title="Privacy Policy"
        updated="13 November 2026"
        intro="Lenard Designs is an independent studio in Maryland. This page explains what the contact form collects, why, where it goes and how to have it removed."
        sections={sections}
        footerNote={
          <p className="font-body-md text-body-md text-on-surface-variant">
            Questions about this policy? Email{" "}
            <a
              href={contactInfo.emailHref}
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              {contactInfo.email}
            </a>{" "}
            or read the{" "}
            <Link
              href="/terms"
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              terms of service
            </Link>
            .
          </p>
        }
      />
      <Footer config={footerConfigs.landing} />
    </>
  );
}
