import type { ChallengeItem } from "@/app/data/project-details";

type ProjectChallengesProps = {
  label: string;
  heading: string;
  description: string;
  items: readonly ChallengeItem[];
};

export default function ProjectChallenges({
  label,
  heading,
  description,
  items,
}: ProjectChallengesProps) {
  return (
    <section className="border-t border-white/10 bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
              {label}
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              {heading}
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-4 md:mt-20">
          {items.map((item) => (
            <article
              key={item.number}
              className="
                rounded-3xl border border-white/10
                bg-black px-6 py-8
                transition-all duration-300
                hover:border-violet-500/40
                md:px-8 md:py-10
              "
            >
              <div className="grid gap-8 lg:grid-cols-[0.35fr_0.55fr_0.9fr] lg:gap-12">
                <div>
                  <p className="text-xs font-medium tracking-[0.35em] text-violet-400">
                    {item.number}
                  </p>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
                    Challenge
                  </p>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {item.problem}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
                    Engineering Response
                  </p>

                  <p className="mt-4 leading-7 text-zinc-300">
                    {item.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 lg:ml-[25%]">
                <p className="text-sm text-zinc-600">
                  <span className="text-violet-400">Lesson →</span>{" "}
                  {item.lesson}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}