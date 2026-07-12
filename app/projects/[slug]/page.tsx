import { notFound } from "next/navigation";

import ProjectHero from "@/components/ProjectDetails/ProjectHero/ProjectHero";
import ProjectOverview from "@/components/ProjectDetails/ProjectOverview/ProjectOverview";
import ProjectArchitecture from "@/components/ProjectDetails/ProjectArchitecture/ProjectArchitecture";
import ProjectStatus from "@/components/ProjectDetails/ProjectStatus/ProjectStatus";
import ProjectChallenges from "@/components/ProjectDetails/ProjectChallenges/ProjectChallenges";
import ProjectRoadmap from "@/components/ProjectDetails/ProjectRoadmap/ProjectRoadmap";

import {
  projectDetails,
  type ProjectSlug,
} from "@/app/data/project-details";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  if (!(slug in projectDetails)) {
    notFound();
  }

  const project = projectDetails[slug as ProjectSlug];

  return (
    <main className="min-h-screen bg-black text-white">
      <ProjectHero
        category={project.category}
        title={project.title}
        status={project.status}
        tagline={project.tagline}
        technologies={project.technologies}
        github={project.github}
      />

      <ProjectOverview
        overview={project.overview}
        problem={project.problem}
        solution={project.solution}
      />

      <ProjectArchitecture />

      <ProjectStatus />

      <ProjectChallenges />

      <ProjectRoadmap />
    </main>
  );
}