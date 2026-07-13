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
        label={project.overview.label}
        heading={project.overview.heading}
        description={project.overview.description}
        problem={project.overview.problem}
        problemTitle={project.overview.problemTitle}
        solution={project.overview.solution}
        solutionTitle={project.overview.solutionTitle}
      />

      <ProjectArchitecture
        label={project.architecture.label}
        heading={project.architecture.heading}
        description={project.architecture.description}
        items={project.architecture.items}
      />

      <ProjectStatus
        label={project.development.label}
        heading={project.development.heading}
        description={project.development.description}
        stages={project.development.stages}
        note={project.development.note}
      />

      <ProjectChallenges
        label={project.challenges.label}
        heading={project.challenges.heading}
        description={project.challenges.description}
        items={project.challenges.items}
      />

      <ProjectRoadmap
        label={project.roadmap.label}
        heading={project.roadmap.heading}
        description={project.roadmap.description}
        items={project.roadmap.items}
        cta={project.cta}
        github={project.github}
      />
    </main>
  );
}