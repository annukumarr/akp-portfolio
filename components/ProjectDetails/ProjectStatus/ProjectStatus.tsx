const developmentStages = [
  {
    status: "Implemented",
    label: "Working System",
    description:
      "Core Jarvis-X interaction and execution capabilities currently implemented and tested.",
    features: [
      "Voice command input",
      "Text-to-speech responses",
      "AI response integration",
      "Command execution pipeline",
      "Application open and close commands",
      "SQLite memory foundation",
      "Memory module testing",
    ],
  },
  {
    status: "In Development",
    label: "Active Engineering",
    description:
      "Modules currently being designed, improved, or integrated into the Jarvis-X architecture.",
    features: [
      "Long-term memory architecture",
      "Context-aware conversations",
      "RAG knowledge pipeline",
      "Modular command routing",
      "Voice response optimization",
      "Jarvis-X system architecture",
    ],
  },
  {
    status: "Planned",
    label: "Future Systems",
    description:
      "Advanced capabilities planned for future Jarvis-X development phases.",
    features: [
      "Wake word detection",
      "Scheduler and proactive tasks",
      "Gesture control",
      "Visual AI dashboard",
      "Multi-agent architecture",
      "Personal knowledge system",
      "Cross-device interaction",
    ],
  },
];

export default function ProjectStatus() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-900">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
              Development Status
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Built in public.
              <br />
              Engineered in layers.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            Jarvis-X is an active long-term engineering project. The system is
            evolving incrementally, with working capabilities separated from
            experimental modules and future architecture.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {developmentStages.map((stage, index) => (
            <article
              key={stage.status}
              className={`relative overflow-hidden rounded-3xl border p-8 transition duration-500 ${
                index === 1
                  ? "border-violet-500/30 bg-violet-500/[0.04]"
                  : "border-zinc-900 bg-zinc-950/40"
              }`}
            >
              {index === 1 && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`text-xs font-medium uppercase tracking-[0.25em] ${
                      index === 1 ? "text-violet-400" : "text-zinc-500"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                    {stage.status}
                  </h3>
                </div>

                <span className="rounded-full border border-zinc-800 px-3 py-1.5 text-[10px] uppercase tracking-wider text-zinc-500">
                  {stage.label}
                </span>
              </div>

              <p className="mt-6 min-h-24 leading-7 text-zinc-400">
                {stage.description}
              </p>

              <div className="mt-8 border-t border-zinc-900 pt-7">
                <ul className="space-y-4">
                  {stage.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-zinc-400"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          index === 1 ? "bg-violet-400" : "bg-zinc-700"
                        }`}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-sm text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.8)]" />

          <p>
            Jarvis-X remains under active development as a modular AI operating
            system.
          </p>
        </div>
      </div>
    </section>
  );
}