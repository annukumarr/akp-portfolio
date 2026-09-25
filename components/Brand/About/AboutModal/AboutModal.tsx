"use client";

import { ReactNode, useEffect } from "react";

type AboutModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function AboutModal({
  open,
  onClose,
  children,
}: AboutModalProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-xl
        p-6
        animate-in
        fade-in
        duration-300
      "
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          w-full
          max-w-7xl
          max-h-[90vh]
          overflow-y-auto
          rounded-[32px]
          border
          border-zinc-800
          bg-[#09090B]
          shadow-[0_20px_80px_rgba(0,0,0,0.6)]
          animate-in
          zoom-in-95
          duration-300
        "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden rounded-[32px]">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close About"
          className="
            absolute
            right-6
            top-6
            z-20
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-zinc-700
            bg-zinc-900/90
            text-xl
            text-white
            backdrop-blur
            transition-all
            duration-300
            hover:scale-105
            hover:border-violet-500
            hover:bg-violet-500/20
          "
        >
          ✕
        </button>

        {/* Content */}
        <div className="relative p-10 md:p-14">
          {children}
        </div>
      </div>
    </div>
  );
}