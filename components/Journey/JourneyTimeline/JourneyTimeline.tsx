import { journey } from "@/app/data/journey";

import JourneyItem from "@/components/Journey/JourneyItem/JourneyItem";
import FadeIn from "@/components/motion/FadeIn";

export default function JourneyTimeline() {
  return (
    <div className="relative mt-20 space-y-24 border-l-2 border-border">
      {journey.timeline.map((item, index) => (
        <FadeIn
          key={`${item.year}-${item.title}`}
          delay={index * 0.15}
          y={32}
        >
          <JourneyItem
            year={item.year}
            title={item.title}
            description={item.description}
          />
        </FadeIn>
      ))}
    </div>
  );
}