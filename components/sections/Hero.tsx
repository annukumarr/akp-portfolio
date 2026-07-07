import Container from "@/components/ui/Container";

import Badge from "@/components/Hero/Badge/Badge";
import Heading from "@/components/Hero/Heading/Heading";
import Description from "@/components/Hero/Description/Description";
import Buttons from "@/components/Hero/Buttons/Buttons";
import SocialProof from "@/components/Hero/SocialProof/SocialProof";

export default function Hero() {
  return (
    <Container>
      <section className="min-h-screen pt-20 flex items-center">
        <div className="grid w-full gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <Badge />
            <Heading />
            <Description />
            <Buttons />
            <SocialProof />
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center">
            <div className="flex h-96 w-96 items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900/30">
              <p className="text-zinc-500">
                Jarvis-X Visualization Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}