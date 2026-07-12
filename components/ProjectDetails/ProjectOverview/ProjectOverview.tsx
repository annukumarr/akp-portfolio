type ProjectOverviewProps = {
  overview: string;
  problem: string;
  solution: string;
};

export default function ProjectOverview({
  overview,
  problem,
  solution,
}: ProjectOverviewProps) {
  return (
    <section className="border-b border-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
              Project Overview
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Engineering intelligence beyond simple commands.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-400">
              {overview}
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-900 bg-zinc-950/50 p-8 md:p-10">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              01 / Problem
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              The limitation
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {problem}
            </p>
          </article>

          <article className="rounded-3xl border border-violet-500/20 bg-violet-500/[0.03] p-8 md:p-10">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
              02 / Solution
            </span>

            <h3 className="mt-6 text-2xl font-semibold text-white">
              The Jarvis-X approach
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {solution}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}