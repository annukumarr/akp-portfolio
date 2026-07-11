type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  category,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6 transition hover:border-white">
      <p className="text-sm text-zinc-500">{category}</p>

      <h3 className="mt-3 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-zinc-400">
        {description}
      </p>

      <button className="mt-8 rounded-lg border border-zinc-700 px-4 py-2 transition hover:border-white">
        View Project →
      </button>
    </div>
  );
}