import { projects } from "@/app/data/projects";
import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";

export default function ProjectsGrid() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.items.map((project) => (
        <ProjectCard
          key={project.title}
          category={project.category}
          title={project.title}
          description={project.description}
          tech={project.tech}
          href={project.href}
        />
      ))}
    </div>
  );
}