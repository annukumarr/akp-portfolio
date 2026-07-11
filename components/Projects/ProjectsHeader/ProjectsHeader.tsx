import { projects } from "@/app/data/projects";

export default function ProjectsHeader() {
  return (
    <div>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {projects.title}
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        {projects.subtitle}
      </p>
    </div>
  );
}