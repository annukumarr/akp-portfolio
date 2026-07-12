"use client";

import { motion } from "motion/react";

type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
  tech: string[];
};

export default function ProjectCard({
  category,
  title,
  description,
  href,
  tech,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-2xl
        border border-zinc-800
        bg-black p-6
        transition-all duration-300
        hover:border-violet-500/60
        hover:shadow-[0_0_35px_rgba(139,92,246,0.12)]
      "
    >
      <div
        className="
          pointer-events-none absolute
          -right-20 -top-20
          h-40 w-40 rounded-full
          bg-violet-600/0 blur-3xl
          transition-all duration-500
          group-hover:bg-violet-600/15
        "
      />

      <p
        className="
          relative text-sm text-zinc-500
          transition-colors duration-300
          group-hover:text-violet-400
        "
      >
        {category}
      </p>

      <h3
        className="
          relative mt-4 text-2xl font-semibold
          transition-colors duration-300
          group-hover:text-violet-400
        "
      >
        {title}
      </h3>

      <p className="relative mt-4 leading-relaxed text-zinc-400">
        {description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {tech.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full border border-zinc-800
              px-3 py-1 text-xs text-zinc-400
              transition-all duration-300
              group-hover:border-violet-500/40
              group-hover:text-violet-300
            "
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="relative mt-auto pt-8">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2
            rounded-xl border border-zinc-700
            px-4 py-2 font-medium
            transition-all duration-300
            hover:border-violet-500
            hover:bg-violet-500/10
            hover:text-violet-300
          "
        >
          View Project

          <span
            className="
              transition-transform duration-300
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </a>
      </div>
    </motion.article>
  );
}