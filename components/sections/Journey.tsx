import { journey } from "@/app/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <h2>{journey.title}</h2>

        <p>{journey.subtitle}</p>

        {journey.timeline.map((item) => (
          <div key={item.year}>
            <h3>{item.year}</h3>

            <h4>{item.title}</h4>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}