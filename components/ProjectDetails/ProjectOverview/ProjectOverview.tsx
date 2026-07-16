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
      <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px] sm:h-96 sm:w-96 sm:blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 md:py-32">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-violet-400 sm:text-xs sm:tracking-[0.3em]">
              {label}
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl md:text-6xl">
              {heading}
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:mt-20 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 sm:rounded-3xl sm:p-8 md:p-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs sm:tracking-[0.25em]">
              {problemTitle}
            </p>

            <p className="mt-5 text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
              {problem}
            </p>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-violet-500/[0.04] p-6 sm:rounded-3xl sm:p-8 md:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-violet-400 sm:text-xs sm:tracking-[0.25em]">
              {solutionTitle}
            </p>

            <p className="mt-5 text-base leading-7 text-zinc-300 sm:mt-6 sm:text-lg sm:leading-8">
              {solution}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}