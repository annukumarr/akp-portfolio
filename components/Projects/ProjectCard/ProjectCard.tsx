"use client";

import Link from "next/link";
import { motion } from "motion/react";

type ProjectCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
  github: string;
  tech: string[];
  status: string;
  year: string;
};

export default function ProjectCard({
  category,
  title,
  description,
  href,
  github,
  tech,
  status,
  year,
}: ProjectCardProps) {
  const isInternal = href.startsWith("/");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -8 }}
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-3xl
        border border-zinc-800
        bg-black/80
        p-7
        transition-all duration-300
        hover:border-violet-500/50
        hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
      "
    >
      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-52 w-52 rounded-full bg-violet-600/0 blur-3xl transition-all duration-500 group-hover:bg-violet-600/15" />

      {/* Category */}
      <p className="relative text-sm tracking-wide text-violet-400">
        {category}
      </p>

      {/* Title */}
      <h3 className="relative mt-4 text-3xl font-semibold text-white transition group-hover:text-violet-300">
        {title}
      </h3>

      {/* Status + Year */}
      <div className="relative mt-5 flex items-center gap-3">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          {status}
        </span>

        <span className="text-sm text-zinc-500">
          {year}
        </span>
      </div>

      {/* Description */}
      <p className="relative mt-6 flex-1 leading-7 text-zinc-400">
        {description}
      </p>

      {/* Tech */}
      <div className="relative mt-8 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              border border-zinc-800
              px-3 py-1
              text-xs
              text-zinc-400
              transition
              group-hover:border-violet-500/40
              group-hover:text-violet-300
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-zinc-800" />

      {/* Actions */}
      <div className="mt-6 flex items-center justify-between gap-3">
        {isInternal ? (
          <Link
            href={href}
            className="
              rounded-xl
              border border-violet-500/40
              px-5 py-3
              text-sm font-medium
              text-violet-300
              transition
              hover:bg-violet-500/10
            "
          >
            View Case Study
          </Link>
        ) : (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              border border-violet-500/40
              px-5 py-3
              text-sm font-medium
              text-violet-300
              transition
              hover:bg-violet-500/10
            "
          >
            View Project
          </a>
        )}

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="
            text-sm
            text-zinc-400
            transition
            hover:text-white
          "
        >
          GitHub →
        </a>
      </div>
    </motion.article>
  );
}