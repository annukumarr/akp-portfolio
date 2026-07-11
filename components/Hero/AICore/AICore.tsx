import type { AICoreState } from "@/app/types/ai-core";

type AICoreProps = {
  state?: AICoreState;
};

const stateConfig = {
  idle: {
    label: "System Idle",
    ringAnimation: "animate-pulse",
    coreAnimation: "animate-pulse",
  },

  listening: {
    label: "Listening",
    ringAnimation: "animate-ping",
    coreAnimation: "animate-pulse",
  },

  thinking: {
    label: "Thinking",
    ringAnimation: "animate-spin",
    coreAnimation: "animate-pulse",
  },

  speaking: {
    label: "Speaking",
    ringAnimation: "animate-pulse",
    coreAnimation: "animate-bounce",
  },
};

export default function AICore({
  state = "idle",
}: AICoreProps) {
  const currentState = stateConfig[state];

  return (
    <div className="relative flex h-[360px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface">
      {/* Ambient Glow */}
      <div className="absolute h-56 w-56 animate-pulse rounded-full bg-accent/10 blur-3xl" />

      {/* Outer Ring */}
      <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-accent/30">
        {/* State Ring */}
        <div
          className={`absolute h-36 w-36 rounded-full border border-accent/20 ${currentState.ringAnimation}`}
        />

        {/* Core Glow */}
        <div className="absolute h-24 w-24 rounded-full bg-accent/10 blur-xl" />

        {/* AI Core */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-accent/50 bg-accent/10 shadow-[0_0_50px_var(--glow-primary)]">
          <div
            className={`h-3 w-3 rounded-full bg-accent-light ${currentState.coreAnimation}`}
          />
        </div>
      </div>

      {/* Core Information */}
      <div className="absolute bottom-6 text-center">
        <p className="text-sm font-medium text-text-primary">
          Legacy AI Core
        </p>

        <p className="mt-1 text-xs text-text-muted">
          {currentState.label}
        </p>
      </div>
    </div>
  );
}