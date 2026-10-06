import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TopNavBar } from "@/components/ui/TopNavBar";
import { Footer } from "@/components/ui/Footer";
import { projects, projectDetails, footerConfigs } from "@/lib/content";
import { ProjectDetailsHero } from "@/components/sections/project-details/ProjectDetailsHero";
import { ChapterSection } from "@/components/sections/project-details/ChapterSection";
import { SplitShowGallery } from "@/components/sections/project-details/SplitShowGallery";
import { ResultProof } from "@/components/sections/project-details/ResultProof";
import { NextProjectCTA } from "@/components/sections/project-details/NextProjectCTA";
import { ChapterNav } from "@/components/sections/project-details/ChapterNav";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const details = projectDetails[id];
  if (!project || !details) return {};
  return {
    title: `${project.title} | Lenard Designs Case Study`,
    description: details.hero?.subtitle ?? project.description,
    openGraph: {
      images: [(details.hero?.image ?? project.image).src],
    },
  };
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const details = projectDetails[id];
  if (!project || !details) notFound();

  return (
    <>
      <TopNavBar />
      <main className="bg-background">
        <ProjectDetailsHero project={project} details={details} />
        <ChapterNav />
        <ChapterSection
          id="problem"
          eyebrow={details.problem.eyebrow}
          title={details.problem.title}
          body={details.problem.body}
          bullets={details.problem.bullets}
          image={details.problem.image}
        />
        {/* Idea split gallery before Idea chapter mirrors Cuberto splitshow interleaving */}
        {details.idea.gallery && <SplitShowGallery images={details.idea.gallery} />}
        <ChapterSection
          id="idea"
          eyebrow={details.idea.eyebrow}
          title={details.idea.title}
          body={details.idea.body}
          insight={details.idea.insight}
        />
        <ChapterSection
          id="result"
          eyebrow={details.result.eyebrow}
          title={details.result.title}
          body={details.result.body}
        />
        <ResultProof gallery={details.result.gallery} metrics={details.result.metrics} quote={details.result.quote} />
        <NextProjectCTA currentId={id} />
      </main>
      <Footer config={footerConfigs.project} />
    </>
  );
}
