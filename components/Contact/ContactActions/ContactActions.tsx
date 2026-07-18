"use client";

import { motion } from "motion/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { contact } from "@/app/data/contact";

export default function ContactActions() {
  return (
    <div className="relative mt-8 flex flex-wrap gap-4">
      <motion.a
        href={contact.actions.email.href}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="
          inline-flex items-center gap-2
          rounded-xl bg-white
          px-6 py-3
          font-medium text-black
          transition-all duration-300
          hover:shadow-[0_0_25px_rgba(255,255,255,0.20)]
        "
      >
        <FaEnvelope className="h-[18px] w-[18px]" />
        {contact.actions.email.label}
      </motion.a>

      <motion.a
        href={contact.actions.github.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="
          inline-flex items-center gap-2
          rounded-xl border border-zinc-700
          px-6 py-3
          font-medium
          transition-all duration-300
          hover:border-violet-500
          hover:bg-violet-500/10
          hover:text-violet-300
          hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]
        "
      >
        <FaGithub className="h-[18px] w-[18px]" />
        {contact.actions.github.label}
      </motion.a>
    </div>
  );
}