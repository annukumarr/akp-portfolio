"use client";

import { useState } from "react";

import type { AICoreState } from "@/app/types/ai-core";

import AICore from "@/components/Hero/AICore/AICore";
import Badge from "@/components/Hero/Badge/Badge";
import Heading from "@/components/Hero/Heading/Heading";
import Description from "@/components/Hero/Description/Description";
import Buttons from "@/components/Hero/Buttons/Buttons";
import SocialProof from "@/components/Hero/SocialProof/SocialProof";

import Container from "@/components/ui/Container";
import FadeIn from "@/components/motion/FadeIn";

const wait = (duration: number) =>
  new Promise((resolve) => setTimeout(resolve, duration));

export default function Hero() {
  const [aiState, setAIState] = useState<AICoreState>("idle");
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  const runAIDemo = async () => {
    if (isDemoRunning) return;

    setIsDemoRunning(true);

    setAIState("listening");
    await wait(2000);

    setAIState("thinking");
    await wait(2500);

    setAIState("speaking");
    await wait(2000);

    setAIState("idle");
    setIsDemoRunning(false);
  };

  return (
    <Container>
      <section className="flex min-h-screen items-center pt-20">
        <div className="grid w-full gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={0}>
              <Badge />
            </FadeIn>

            <FadeIn delay={0.1}>
              <Heading />
            </FadeIn>

            <FadeIn delay={0.2}>
              <Description />
            </FadeIn>

            <FadeIn delay={0.3}>
              <Buttons />
            </FadeIn>

            <FadeIn delay={0.4}>
              <SocialProof />
            </FadeIn>
          </div>

          {/* Right Side */}
          <FadeIn delay={0.5} y={40}>
            <div className="flex flex-col items-center justify-center gap-6">
              <AICore state={aiState} />

              <button
                type="button"
                onClick={runAIDemo}
                disabled={isDemoRunning}
                className="rounded-xl border border-accent/50 px-5 py-3 text-sm font-medium text-accent-light transition duration-300 hover:border-accent hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isDemoRunning ? "AI Demo Running..." : "Run AI Demo"}
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </Container>
  );
}