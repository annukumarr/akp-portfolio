"use client";

import { useState } from "react";

import { hero } from "@/app/data/hero";

import Button from "@/components/ui/Button";

import AboutModal from "@/components/Brand/About/AboutModal/AboutModal";
import AboutContent from "@/components/Brand/About/AboutContent/AboutContent";
import BrandCard from "@/components/Brand/BrandCard/BrandCard";

export default function Buttons() {
  const [aboutOpen, setAboutOpen] = useState(false);

  const [brandCardOpen, setBrandCardOpen] =
    useState(false);

  return (
    <>
      {/* ==================================================
          ACTION BUTTONS
      ================================================== */}

      <div className="flex flex-wrap items-center gap-4">

        {/* Journey */}
        <Button
          href="#journey"
          variant="primary"
        >
          {hero.buttons.primary}
        </Button>

        {/* GitHub */}
        <Button
          href="https://github.com/annukumarr"
          variant="secondary"
          external
        >
          {hero.buttons.secondary}
        </Button>

        {/* About */}
        <Button
          variant="secondary"
          onClick={() =>
            setAboutOpen(true)
          }
        >
          About Me
        </Button>

      </div>


      {/* ==================================================
          ABOUT MODAL
      ================================================== */}

      <AboutModal
        open={aboutOpen}
        onClose={() =>
          setAboutOpen(false)
        }
      >
        <AboutContent
          onOpenBrandCard={() =>
            setBrandCardOpen(true)
          }
        />
      </AboutModal>


      {/* ==================================================
          BRAND CARD
      ================================================== */}

      <BrandCard
        open={brandCardOpen}
        onClose={() =>
          setBrandCardOpen(false)
        }
      />
    </>
  );
}