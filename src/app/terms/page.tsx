import type { Metadata } from "next";
import Link from "next/link";
import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { LegalDocument } from "@/components/ui/LegalDocument";
import type { LegalSection } from "@/components/ui/LegalDocument";
import { contactInfo, footerConfigs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service | Lenard Designs",
  description:
    "Terms for using the Lenard Designs website, including how project quotes, case study figures and intellectual property are handled.",
};

const sections: LegalSection[] = [
  {
    heading: "Using this site",
    paragraphs: [
      "This site describes the studio and its work. You may read it, share links to it and use it to decide whether to get in touch.",
      "You may not scrape it at volume, attempt to interfere with it, or present its text or images as your own.",
    ],
  },
  {
    heading: "Quotes and timelines",
    paragraphs: [
      "We quote each project individually after a scoping conversation. The services page publishes neither prices nor fixed timelines, because both are set per project in the written scope, and nothing published on the site is an offer. A binding quote exists only in a written, signed scope that names the deliverables, the fee, the dates and the payment schedule.",
      "Anything said in a call, an email or a proposal that is not carried into that written scope is not part of the agreement.",
    ],
  },
  {
    heading: "Case studies and results",
    paragraphs: [
      "Case studies describe work that has been done. Each page states the client, the role the studio held and the status of the work at the time of writing.",
      "Figures are reported as described on the page. The Zizi percentages are pilot results reported by the client team and are not independently audited. Past results are not a promise of future outcomes for your project.",
    ],
  },
  {
    heading: "Intellectual property",
    paragraphs: [
      "The design, text and code of this website belong to Lenard Designs. Client names, product names and marks, including Zizi, SiteSense, Tracky and CoNA Lab, belong to their respective owners and are used here to describe the work.",
      "Deliverables produced for a client transfer on full payment under the terms of that client's agreement. Until then, the studio retains ownership of its working files.",
    ],
  },
  {
    heading: "Third-party links",
    paragraphs: [
      "The site links to email and telephone contacts. Where it later links to third-party sites or repositories, those sites are governed by their own terms and we are not responsible for their content.",
    ],
  },
  {
    heading: "Availability and liability",
    paragraphs: [
      "The site is provided as is. We aim to keep it available and accurate but do not guarantee uninterrupted access, and details of past work may change as projects progress.",
      "To the extent permitted by Maryland law, Lenard Designs is not liable for indirect or consequential loss arising from use of this site. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the State of Maryland, United States. Disputes will be handled in the state or federal courts located in Maryland.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      `Questions about these terms can be sent to ${contactInfo.email}. We reply within one business day, Monday to Friday.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <TopNavBar />
      <LegalDocument
        title="Terms of Service"
        updated="13 November 2026"
        intro="These terms cover use of this website. Client work is governed by a separate written agreement, not by this page."
        sections={sections}
        footerNote={
          <p className="font-body-md text-body-md text-on-surface-variant">
            See also the{" "}
            <Link
              href="/privacy"
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              privacy policy
            </Link>
            , or get in touch at{" "}
            <a
              href={contactInfo.emailHref}
              className="text-soft-white underline underline-offset-4 hover:text-surface-tint transition-colors"
            >
              {contactInfo.email}
            </a>
            .
          </p>
        }
      />
      <Footer config={footerConfigs.landing} />
    </>
  );
}
