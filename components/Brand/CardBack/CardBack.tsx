import Image from "next/image";

import { brand } from "@/app/data/brand";

export default function CardBack() {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        overflow-hidden
        rounded-[34px]
        border border-black/5
        bg-white
        text-black
        shadow-[0_40px_80px_rgba(0,0,0,.45)]
        select-none
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(0,0,0,.03),transparent_55%)]
        "
      />

      {/* Top Accent */}
      <div className="relative z-10 h-5 w-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500" />

      {/* Logo */}
      <div className="relative z-10 mt-8 flex justify-center">
        <Image
          src="/images/legacy-logo.png"
          alt="Legacy Logo"
          width={70}
          height={70}
          priority
          className="drop-shadow-md"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 mt-5 text-center">
        <h2 className="text-[28px] font-black tracking-tight">
          Scan To Connect
        </h2>

        <p className="mt-2 text-sm tracking-wide text-zinc-600">
          Portfolio • Resume • Socials
        </p>
      </div>

      {/* QR */}
      <div className="relative z-10 mt-8 flex justify-center">
        <div
          className="
            rounded-[24px]
            border
            border-zinc-200
            bg-white
            p-4
            shadow-[0_20px_50px_rgba(0,0,0,.12)]
          "
        >
          <Image
            src="/images/qr.png"
            alt="QR Code"
            width={180}
            height={180}
            priority
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mx-8 mt-8 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

      {/* Contact */}
      <div className="relative z-10 mt-6 space-y-5 px-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Email
          </p>

          <p className="mt-1 text-[15px] font-medium text-zinc-800">
            {brand.about.email}
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            LinkedIn
          </p>

          <p className="mt-1 break-all text-[13px] leading-6 text-zinc-700">
            {brand.about.linkedin}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-auto px-8 pb-8 pt-8">
        <div
          className="
            rounded-[24px]
            border
            border-zinc-200
            bg-zinc-100
            p-5
            text-center
          "
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-zinc-500">
            LEGACY AI
          </p>

          <p className="mt-3 text-[15px] leading-7 text-zinc-700">
            Building intelligent software,
            AI systems and meaningful
            digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}