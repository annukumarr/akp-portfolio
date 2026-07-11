import { journey } from "@/app/data/journey";

export default function JourneyHeader() {
  return (
    <div>
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
        {journey.title}
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        {journey.subtitle}
      </p>
    </div>
  );
}