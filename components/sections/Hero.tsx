import AICore from "@/components/Hero/AICore/AICore";
import Container from "@/components/ui/Container";

import Badge from "@/components/Hero/Badge/Badge";
import Heading from "@/components/Hero/Heading/Heading";
import Description from "@/components/Hero/Description/Description";
import Buttons from "@/components/Hero/Buttons/Buttons";
import SocialProof from "@/components/Hero/SocialProof/SocialProof";

export default function Hero() {
  return (
    <Container>
      <section className="flex min-h-screen items-center pt-20">
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
            <AICore />
          </div>
        </div>
      </section>
    </Container>
  );
}