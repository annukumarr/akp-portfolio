"use client";

import { useState } from "react";

import type { AICoreState } from "@/app/types/ai-core";

import Badge from "@/components/Hero/Badge/Badge";
import Buttons from "@/components/Hero/Buttons/Buttons";
import Description from "@/components/Hero/Description/Description";
import Heading from "@/components/Hero/Heading/Heading";
import HeroBackground from "@/components/Hero/HeroBackground/HeroBackground";
import NowBuilding from "@/components/Hero/NowBuilding/NowBuilding";
import SocialProof from "@/components/Hero/SocialProof/SocialProof";

import JarvisLauncher from "@/components/Jarvis/JarvisLauncher";
import JarvisWidget from "@/components/Jarvis/JarvisWidget";

import FadeIn from "@/components/motion/FadeIn";
import Container from "@/components/ui/Container";

export default function Hero() {
  const [aiState, setAIState] =
    useState<AICoreState>("idle");

  const [showJarvisPanel, setShowJarvisPanel] =
    useState(false);

  const openJarvis = () => {
    setShowJarvisPanel(true);
    setAIState("idle");
  };

  const closeJarvis = () => {
    setShowJarvisPanel(false);
    setAIState("idle");
  };

  return (
    <div className="relative">
      <HeroBackground />

      <Container className="relative z-10">
        {/* Floating JARVIS Launcher */}
        {!showJarvisPanel && (
          <JarvisLauncher onClick={openJarvis} />
        )}

        <section className="flex min-h-screen items-center py-32">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">

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

              <FadeIn delay={0.5}>
                <NowBuilding />
              </FadeIn>

            </div>

          </div>
        </section>
      </Container>

      {/* Floating Ask JARVIS Widget */}
      {showJarvisPanel && (
        <JarvisWidget
          onClose={closeJarvis}
          onStateChange={setAIState}
        />
      )}
    </div>
  );
}