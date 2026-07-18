"use client";

import { motion } from "motion/react";

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
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ x: 10 }}
      className="group relative pl-12"
    >
      {/* Timeline Dot */}
      <div
        className="
          absolute -left-[7px] top-2
          h-4 w-4 rounded-full
          border-2 border-zinc-950
          bg-zinc-600
          transition-all duration-300
          group-hover:scale-125
          group-hover:bg-violet-500
          group-hover:shadow-[0_0_24px_rgba(139,92,246,0.9)]
        "
      />

      {/* Year Badge */}
      <span
        className="
          inline-flex items-center rounded-full
          border border-zinc-800
          bg-zinc-900/70
          px-3 py-1
          text-xs font-medium tracking-wide
          text-zinc-400
          transition-all duration-300
          group-hover:border-violet-500/40
          group-hover:text-violet-300
        "
      >
        {year}
      </span>

      {/* Title */}
      <h3
        className="
          mt-4 text-2xl font-semibold
          text-zinc-100
          transition-colors duration-300
          group-hover:text-violet-400
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4 max-w-2xl
          leading-8
          text-zinc-400
          transition-colors duration-300
          group-hover:text-zinc-300
        "
      >
        {description}
      </p>
    </motion.div>
  );
}