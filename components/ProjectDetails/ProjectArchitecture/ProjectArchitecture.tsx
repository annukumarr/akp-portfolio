import type { ArchitectureItem } from "@/app/data/project-details";

type ProjectArchitectureProps = {
  label: string;
  heading: string;
  description: string;
  items: readonly ArchitectureItem[];
};

export default function ProjectArchitecture({
  label,
  heading,
  description,
  items,
}: ProjectArchitectureProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-900">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
            {label}
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {heading}
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            {description}
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-gradient-to-b from-violet-500 via-violet-500/40 to-transparent md:block" />

          <div className="space-y-6">
            {items.map((layer) => (
              <article
                key={layer.number}
                className="group relative grid gap-6 rounded-3xl border border-zinc-900 bg-zinc-950/40 p-7 transition duration-500 hover:border-violet-500/30 hover:bg-violet-500/[0.03] md:grid-cols-[56px_0.8fr_1.2fr] md:items-start md:p-8"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-violet-500/30 bg-black text-xs font-medium text-violet-400 transition duration-500 group-hover:border-violet-400 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  {layer.number}
                </div>

                <div className="md:pt-3">
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {layer.title}
                  </h3>
                </div>

                <div className="md:pt-3">
                  <p className="leading-7 text-zinc-400">
                    {layer.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {layer.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400 transition duration-300 group-hover:border-violet-500/20 group-hover:text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}