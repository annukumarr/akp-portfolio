import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="pb-32 pt-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold tracking-tight text-text-primary">
          {projects.title}
        </h2>

        {/* Section Description */}
        <p className="mt-6 max-w-2xl leading-7 text-text-secondary">
          {projects.subtitle}
        </p>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-border-hover"
            >
              {/* Project Category */}
              <p className="text-sm text-text-muted">
                {project.category}
              </p>

              {/* Project Title */}
              <h3 className="mt-3 text-2xl font-semibold text-text-primary">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mt-4 leading-7 text-text-secondary">
                {project.description}
              </p>

              {/* Project Action */}
              <button
                type="button"
                className="mt-8 w-fit rounded-lg border border-border px-4 py-2 text-sm text-text-primary transition duration-300 group-hover:border-accent/50 group-hover:text-accent-light"
              >
                View Project →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}