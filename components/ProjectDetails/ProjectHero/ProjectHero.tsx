import Link from "next/link";

type ProjectHeroProps = {
  category: string;
  title: string;
  status: string;
  tagline: string;
  technologies: readonly string[];
  github: string;
};

export default function ProjectHero({
  category,
  title,
  status,
  tagline,
  technologies,
  github,
}: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.10),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex text-sm text-zinc-500 transition duration-300 hover:text-white"
        >
          ← Back to projects
        </Link>

        <div className="mt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
              {category}
            </span>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400">
              {status}
            </span>
          </div>

          <h1 className="mt-8 text-6xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400 md:text-2xl">
            {tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl border border-violet-500/50 px-6 py-4 font-medium text-violet-300 transition duration-300 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-200"
            >
              View GitHub Repository →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}