type JourneyItemProps = {
  year: string;
  title: string;
  description: string;
};

export default function JourneyItem({
  year,
  title,
  description,
}: JourneyItemProps) {
  return (
    <div className="relative pl-10">
      <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-white" />

      <p className="text-sm text-zinc-500">{year}</p>

      <h3 className="mt-3 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 max-w-2xl text-zinc-400">
        {description}
      </p>
    </div>
  );
}