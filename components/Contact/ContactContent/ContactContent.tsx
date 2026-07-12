"use client";

import { motion } from "motion/react";
import { contact } from "@/app/data/contact";
import ContactActions from "@/components/Contact/ContactActions/ContactActions";

export default function ContactContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="
        group relative mt-12 overflow-hidden
        rounded-2xl border border-zinc-800
        bg-black px-10 py-10
        transition-all duration-500
        hover:border-violet-500/50
        hover:shadow-[0_0_40px_rgba(139,92,246,0.10)]
        max-sm:px-6 max-sm:py-8
      "
    >
      <div
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-56 w-56 rounded-full
          bg-violet-600/0 blur-3xl
          transition-all duration-700
          group-hover:bg-violet-600/15
        "
      />

      <p
        className="
          relative max-w-3xl
          text-lg leading-relaxed text-zinc-300
          transition-colors duration-300
          group-hover:text-white
        "
      >
        {contact.subtitle}
      </p>

      <ContactActions />
    </motion.div>
  );
}