const challenges = [
  {
    number: "01",
    title: "Voice response latency",
    problem:
      "Text-to-speech responses were slow and occasionally repeated, making the interaction feel unnatural and interrupting the command execution flow.",
    solution:
      "Refined the speech execution lifecycle, tested engine stop behavior, and separated voice output from command processing to improve response control.",
    lesson: "Voice systems require lifecycle control, not just speech APIs.",
  },
  {
    number: "02",
    title: "Command routing complexity",
    problem:
      "As Jarvis-X gained more capabilities, directly handling every command inside a single execution flow became difficult to maintain and extend.",
    solution:
      "Introduced a modular command execution pipeline where system commands are routed independently and unresolved requests fall back to the AI reasoning layer.",
    lesson: "Modular routing makes intelligent systems easier to scale.",
  },
  {
    number: "03",
    title: "Context and memory",
    problem:
      "A stateless assistant could answer individual prompts but could not maintain meaningful continuity across interactions.",
    solution:
      "Designed a SQLite-based memory foundation and separated memory logic into dedicated modules as the base for contextual and long-term memory.",
    lesson: "Persistent intelligence begins with structured memory.",
  },
  {
    number: "04",
    title: "AI system architecture",
    problem:
      "Combining speech recognition, AI responses, automation, memory, and system commands created tightly coupled execution paths.",
    solution:
      "Reframed Jarvis-X as a layered AI operating system with independent voice, intelligence, memory, execution, and output systems.",
    lesson: "Architecture determines how far an AI project can evolve.",
  },
];

export default function ProjectChallenges() {
  return (
    <section className="border-t border-white/10 bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
              Engineering Challenges
            </p>

            <h2 className="max-w-md text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Problems that shaped the system.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              Building Jarvis-X required solving problems across voice
              interaction, command execution, memory, and system architecture.
              Each limitation influenced how the next version of the system was
              designed.
            </p>
          </div>
        </div>

        <div className="mt-20 space-y-5">
          {challenges.map((challenge) => (
            <article
              key={challenge.number}
              className="group rounded-3xl border border-white/10 bg-zinc-950/40 p-7 transition duration-300 hover:border-violet-500/40 md:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[0.45fr_1.55fr] lg:gap-14">
                <div>
                  <span className="text-xs font-medium tracking-[0.3em] text-violet-400">
                    {challenge.number}
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {challenge.title}
                  </h3>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
                      Challenge
                    </p>

                    <p className="leading-7 text-zinc-400">
                      {challenge.problem}
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
                      Engineering Response
                    </p>

                    <p className="leading-7 text-zinc-300">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6 lg:ml-[27%]">
                <p className="text-sm text-zinc-500">
                  <span className="mr-3 text-violet-400">Lesson →</span>
                  {challenge.lesson}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}