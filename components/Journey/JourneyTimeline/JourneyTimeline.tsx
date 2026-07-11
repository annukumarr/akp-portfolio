import { journey } from "@/app/data/journey";
import JourneyItem from "@/components/Journey/JourneyItem/JourneyItem";

export default function JourneyTimeline() {
  return (
    <div className="relative mt-16 space-y-16 border-l border-zinc-800">
      {journey.timeline.map((item) => (
        <JourneyItem
          key={`${item.year}-${item.title}`}
          year={item.year}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}