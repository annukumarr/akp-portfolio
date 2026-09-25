"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CardFrontProps = {
  className?: string;
};

const dots = Array.from({ length: 42 });

export default function CardFront({
  className = "",
}: CardFrontProps) {
  return (
    <motion.div
      initial={{ rotateY: 180 }}
      animate={{ rotateY: 0 }}
      transition={{ duration: 0.45 }}
      className={`relative h-[620px] w-[380px] overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] ${className}`}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-zinc-100" />

      {/* Decorative Blur */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-zinc-200/40 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-zinc-300/30 blur-3xl" />

      {/* Vertical Text */}
      <div className="absolute left-4 top-0 flex h-full items-center">
        <span
          className="select-none text-[11px] font-bold uppercase tracking-[0.7rem] text-zinc-300"
          style={{ writingMode: "vertical-rl" }}
        >
          LEGACY AI
        </span>
      </div>

      {/* Dot Grid */}
      <div className="absolute right-6 top-6 grid grid-cols-6 gap-2">
        {dots.map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-zinc-300"
          />
        ))}
      </div>

      <div className="relative flex h-full flex-col px-10 py-10">
        {/* Logo */}
        <div className="flex justify-end">
          <Image
            src="/images/legacy-logo.png"
            alt="Legacy Logo"
            width={62}
            height={62}
            priority
            className="object-contain"
          />
        </div>

        {/* Profile */}
        <div className="mt-4 flex justify-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-[6px] border-white shadow-2xl ring-1 ring-zinc-200">
            <Image
              src="/images/profile.jpg"
              alt="Annu Kumar Pal"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-black tracking-tight text-zinc-900">
            Annu Kumar Pal
          </h2>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.28rem] text-zinc-500">
            AI / ML Engineer
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />

        {/* Bottom */}
        <div className="mt-auto">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-5">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.35rem] text-zinc-400">
              Chandigarh University
            </p>

            <p className="mt-2 text-center text-lg font-bold text-zinc-900">
              MCA • AI & ML
            </p>

            <p className="mt-3 text-center text-sm text-zinc-500">
              Mohali, Punjab
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}