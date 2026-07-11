import { projects } from "@/app/data/projects";

import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import FadeIn from "@/components/motion/FadeIn";

export default function ProjectsGrid() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.items.map((project, index) => (
        <FadeIn
          key={project.title}
          delay={index * 0.15}
          y={32}
          className="h-full"
        >
          <ProjectCard
            category={project.category}
            title={project.title}
            description={project.description}
            href={project.href}
          />
        </FadeIn>
      ))}
    </div>
  );
}