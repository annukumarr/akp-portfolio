type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
};

export default function ProjectCard({
  category,
  title,
  description,
  href,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-800 p-6 transition duration-300 hover:-translate-y-1 hover:border-white">
      <p className="text-sm text-zinc-500">{category}</p>

      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>

      <p className="mt-4 flex-1 text-zinc-400">{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 w-fit rounded-lg border border-zinc-700 px-4 py-2 transition hover:border-white"
      >
        View Project →
      </a>
    </article>
  );
}