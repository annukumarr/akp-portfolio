"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CardFront from "@/components/Brand/CardFront/CardFront";
import CardBack from "@/components/Brand/CardBack/CardBack";
import CardModal from "@/components/Brand/CardModal/CardModal";

type BrandCardProps = {
  open: boolean;
  onClose: () => void;
};

export default function BrandCard({
  open,
  onClose,
}: BrandCardProps) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (!open) {
      setFlipped(false);
    }
  }, [open]);

  return (
    <CardModal
      open={open}
      onClose={() => {
        setFlipped(false);
        onClose();
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.88,
          y: -120,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.88,
          y: -120,
        }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 18,
        }}
        className="flex items-center justify-center"
      >
        <motion.div
          role="button"
          tabIndex={0}
          aria-label="Legacy Business Card"
          onClick={() => setFlipped((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setFlipped((prev) => !prev);
            }
          }}
          animate={{
            rotateY: flipped ? 180 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
            perspective: 2000,
            willChange: "transform",
          }}
          className="
            relative
            h-[620px]
            w-[390px]
            cursor-pointer
            outline-none
            rounded-[34px]
          "
        >
          {/* Front */}
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <CardFront />
          </div>

          {/* Back */}
          <div
            className="absolute inset-0"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <CardBack />
          </div>
        </motion.div>
      </motion.div>
    </CardModal>
  );
}