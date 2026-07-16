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
    <section className="relative overflow-hidden border-b border-white/10 bg-black px-5 py-14 sm:px-6 sm:py-20 md:px-10 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.10),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex text-xs text-zinc-500 transition duration-300 hover:text-white sm:text-sm"
        >
          ← Back to projects
        </Link>

        <div className="mt-10 sm:mt-14 md:mt-16">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-300 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
              {category}
            </span>

            <span className="rounded-full border border-white/10 px-3 py-2 text-[10px] text-zinc-400 sm:px-4 sm:text-xs">
              {status}
            </span>
          </div>

          <h1 className="mt-7 text-5xl font-semibold tracking-tight text-white sm:mt-8 sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:mt-8 sm:text-xl sm:leading-8 md:text-2xl">
            {tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-400 sm:px-4 sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 sm:mt-12">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl border border-violet-500/50 px-5 py-3 text-sm font-medium text-violet-300 transition duration-300 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-200 sm:w-auto sm:px-6 sm:py-4 sm:text-base"
            >
              View GitHub Repository →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}