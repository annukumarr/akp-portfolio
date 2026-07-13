import Link from "next/link";

import type { RoadmapItem } from "@/app/data/project-details";

type ProjectRoadmapProps = {
  label: string;
  heading: string;
  description: string;
  items: readonly RoadmapItem[];
  cta: {
    label: string;
    heading: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  github: string;
};

export default function ProjectRoadmap({
  label,
  heading,
  description,
  items,
  cta,
  github,
}: ProjectRoadmapProps) {
  return (
    <section className="border-t border-white/10 bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
              {label}
            </p>

            <h2 className="max-w-md text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              {heading}
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10">
          {items.map((item) => (
            <article
              key={item.phase}
              className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[0.35fr_0.65fr_1.2fr] md:gap-12 md:py-14"
            >
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
                  {item.phase}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-violet-300 md:text-3xl">
                  {item.title}
                </h3>
              </div>

              <div>
                <p className="max-w-xl leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.systems.map((system) => (
                    <span
                      key={system}
                      className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400"
                    >
                      {system}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-28 rounded-[2rem] border border-violet-500/30 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_60%)] px-8 py-20 text-center md:px-16 md:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
            {cta.label}
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            {cta.heading}
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            {cta.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-7 py-4 font-medium text-black transition duration-300 hover:bg-zinc-200"
            >
              {cta.primaryLabel}
            </a>

            <Link
              href="/#projects"
              className="rounded-xl border border-white/15 px-7 py-4 font-medium text-white transition duration-300 hover:border-violet-500/50 hover:text-violet-300"
            >
              {cta.secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}