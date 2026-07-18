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
      whileHover={{ y: -6 }}
      className="
        group relative mt-12 overflow-hidden
        rounded-3xl border border-zinc-800
        bg-gradient-to-br from-black via-zinc-950 to-black
        px-10 py-10
        transition-all duration-500
        hover:border-violet-500/50
        hover:shadow-[0_0_50px_rgba(139,92,246,0.12)]
        max-sm:px-6 max-sm:py-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute
          -right-24 -top-24
          h-64 w-64 rounded-full
          bg-violet-600/0 blur-3xl
          transition-all duration-700
          group-hover:bg-violet-600/15
        "
      />

      {/* Subtle Grid */}
      <div
        className="
          absolute inset-0 opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <p
        className="
          relative max-w-3xl
          text-lg leading-8 text-zinc-300
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