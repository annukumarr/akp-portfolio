import JourneyHeader from "@/components/Journey/JourneyHeader/JourneyHeader";
import JourneyTimeline from "@/components/Journey/JourneyTimeline/JourneyTimeline";
import Container from "@/components/ui/Container";

export default function Journey() {
  return (
    <Container>
      <section id="journey" className="py-32">
        <JourneyHeader />
        <JourneyTimeline />
      </section>
    </Container>
  );
}