import type { AICoreState } from "@/app/types/ai-core";

type AICoreProps = {
  state?: AICoreState;
};

const stateConfig = {
  idle: {
    label: "System Idle",
    ringAnimation: "animate-pulse",
    coreAnimation: "animate-pulse",
    statusColor: "bg-emerald-400",
  },

  listening: {
    label: "Listening...",
    ringAnimation: "animate-ping",
    coreAnimation: "animate-pulse",
    statusColor: "bg-sky-400",
  },

  thinking: {
    label: "Thinking...",
    ringAnimation: "animate-spin",
    coreAnimation: "animate-pulse",
    statusColor: "bg-yellow-400",
  },

  speaking: {
    label: "Speaking...",
    ringAnimation: "animate-pulse",
    coreAnimation: "animate-bounce",
    statusColor: "bg-purple-400",
  },
} satisfies Record<
  AICoreState,
  {
    label: string;
    ringAnimation: string;
    coreAnimation: string;
    statusColor: string;
  }
>;

export default function AICore({
  state = "idle",
}: AICoreProps) {
  const currentState = stateConfig[state];

  return (
    <div className="relative flex h-[390px] w-full max-w-[430px] items-center justify-center overflow-hidden rounded-[32px] border border-border/80 bg-gradient-to-br from-surface via-[#09090b] to-surface shadow-[0_0_80px_rgba(139,92,246,0.08)] backdrop-blur-xl">

      {/* Ambient Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-accent/10 blur-[100px]" />

      {/* Ring 1 */}
      <div
        className={`absolute h-56 w-56 rounded-full border border-accent/15 ${currentState.ringAnimation}`}
      />

      {/* Ring 2 */}
      <div className="absolute h-44 w-44 rounded-full border border-accent/20" />

      {/* Ring 3 */}
      <div className="absolute h-32 w-32 rounded-full border border-accent/30" />

      {/* Inner Glow */}
      <div className="absolute h-24 w-24 rounded-full bg-accent/20 blur-3xl" />

      {/* AI Core */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-accent/50 bg-accent/10 shadow-[0_0_80px_rgba(139,92,246,0.45)]">

        <div
          className={`h-4 w-4 rounded-full bg-accent-light ${currentState.coreAnimation}`}
        />

      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-7 flex flex-col items-center">

        <div className="flex items-center gap-2">

          <span
            className={`h-2.5 w-2.5 rounded-full ${currentState.statusColor} animate-pulse`}
          />

          <span className="text-xs uppercase tracking-[0.25em] text-text-muted">
            AI CORE
          </span>

        </div>

        <h3 className="mt-3 text-lg font-semibold text-text-primary">
          Legacy Intelligence
        </h3>

        <p className="mt-1 text-sm text-text-secondary">
          {currentState.label}
        </p>

      </div>
    </div>
  );
}