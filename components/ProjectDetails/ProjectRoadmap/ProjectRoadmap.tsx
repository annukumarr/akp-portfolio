import Link from "next/link";

const roadmap = [
  {
    phase: "Phase 01",
    title: "Contextual Intelligence",
    description:
      "Build deeper conversational continuity using structured long-term memory and context-aware interaction.",
    systems: ["Long-term Memory", "Context Engine", "Personal Knowledge"],
  },
  {
    phase: "Phase 02",
    title: "Proactive Automation",
    description:
      "Move Jarvis-X beyond reactive commands by introducing scheduled actions, proactive tasks, and intelligent workflows.",
    systems: ["Scheduler", "Task Engine", "Workflow Automation"],
  },
  {
    phase: "Phase 03",
    title: "Multimodal Interaction",
    description:
      "Expand interaction beyond voice through visual interfaces, gesture control, and intelligent system dashboards.",
    systems: ["Visual Dashboard", "Gesture Control", "Multimodal Input"],
  },
  {
    phase: "Phase 04",
    title: "Agentic System",
    description:
      "Evolve Jarvis-X into a coordinated multi-agent architecture capable of planning and executing complex objectives.",
    systems: ["AI Agents", "Planning", "Multi-Agent Architecture"],
  },
];

export default function ProjectRoadmap() {
  return (
    <section className="border-t border-white/10 bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
              Future Roadmap
            </p>

            <h2 className="max-w-md text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              The system is only getting started.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Jarvis-X is designed as a long-term AI engineering system. Each
              development phase expands its ability to understand context,
              automate workflows, interact across modalities, and coordinate
              intelligent agents.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10">
          {roadmap.map((item) => (
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
            Jarvis-X
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
            Building intelligence as a system, not a feature.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Jarvis-X is an evolving AI operating system exploring memory,
            automation, reasoning, voice interaction, and modular intelligence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/annukumarr/Jarvis-X"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-7 py-4 font-medium text-black transition duration-300 hover:bg-zinc-200"
            >
              View GitHub Repository →
            </a>

            <Link
              href="/#projects"
              className="rounded-xl border border-white/15 px-7 py-4 font-medium text-white transition duration-300 hover:border-violet-500/50 hover:text-violet-300"
            >
              Explore More Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}