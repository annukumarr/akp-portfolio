"use client";

import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function CardModal({
  open,
  onClose,
  children,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="brand-card-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/80
            backdrop-blur-xl
            p-6
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            {children}

            <button
              type="button"
              aria-label="Close card"
              onClick={onClose}
              className="
                absolute
                -right-5
                -top-5
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-zinc-700
                bg-zinc-900/95
                text-lg
                text-white
                backdrop-blur
                transition-all
                duration-300
                hover:scale-105
                hover:border-violet-500
                hover:bg-violet-600
                active:scale-95
              "
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}