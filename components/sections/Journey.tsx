import { journey } from "@/app/data/journey";

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-32 bg-black text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-bold">
          {journey.title}
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-zinc-400">
          {journey.subtitle}
        </p>

        {/* Timeline */}
        <div className="mt-20">
          {journey.timeline.map((item) => (
            <div
              key={item.year}
              className="relative border-l border-zinc-800 pl-8 pb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-white"></div>

              {/* Year */}
              <span className="text-sm text-zinc-500">
                {item.year}
              </span>

              {/* Title */}
              <h3 className="mt-2 text-2xl font-semibold">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}