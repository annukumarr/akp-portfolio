type ProjectOverviewProps = {
  label: string;
  heading: string;
  description: string;
  problem: string;
  problemTitle: string;
  solution: string;
  solutionTitle: string;
};

export default function ProjectOverview({
  label,
  heading,
  description,
  problem,
  problemTitle,
  solution,
  solutionTitle,
}: ProjectOverviewProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-900">
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
              {label}
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {heading}
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-8 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              {problemTitle}
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {problem}
            </p>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-violet-500/30 bg-violet-500/[0.04] p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              {solutionTitle}
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {solution}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}