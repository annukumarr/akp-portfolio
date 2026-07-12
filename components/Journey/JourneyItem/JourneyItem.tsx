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
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ x: 8 }}
      className="group relative pl-10"
    >
      <div
        className="
          absolute -left-[6px] top-2
          h-3 w-3 rounded-full
          bg-zinc-400
          transition-all duration-300
          group-hover:scale-125
          group-hover:bg-violet-500
          group-hover:shadow-[0_0_20px_rgba(139,92,246,0.9)]
        "
      />

      <p
        className="
          text-sm text-zinc-500
          transition-colors duration-300
          group-hover:text-violet-400
        "
      >
        {year}
      </p>

      <h3
        className="
          mt-3 text-2xl font-semibold
          transition-colors duration-300
          group-hover:text-violet-400
        "
      >
        {title}
      </h3>

      <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}