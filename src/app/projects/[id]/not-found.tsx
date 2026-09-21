import Link from "next/link";
import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { footerConfigs } from "@/lib/content";

export default function NotFound() {
  return (
    <>
      <TopNavBar />
      <main className="px-margin-mobile md:px-margin-desktop max-w-[1920px] mx-auto py-32 text-center">
        <p className="font-label-caps text-label-caps text-outline">404</p>
        <h1 className="font-headline-lg text-headline-lg text-soft-white mt-4">Project not found</h1>
        <Link href="/projects" className="inline-flex mt-8 border border-glass-border px-6 py-4 font-label-caps text-label-caps text-soft-white hover:bg-white/5 transition-colors">
          Back to projects
        </Link>
      </main>
      <Footer config={footerConfigs.project} />
    </>
  );
}
