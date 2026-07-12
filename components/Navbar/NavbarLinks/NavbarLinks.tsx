"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navbar } from "@/app/data/navbar";

export default function NavbarLinks() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navbar.links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (firstEntry, secondEntry) =>
              secondEntry.intersectionRatio -
              firstEntry.intersectionRatio
          );

        const activeEntry = visibleSections[0];

        if (activeEntry) {
          setActiveSection(`#${activeEntry.target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav aria-label="Primary navigation">
      <ul className="hidden items-center gap-8 md:flex">
        {navbar.links.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <li key={link.title}>
              <a
                href={link.href}
                className={`group relative text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-accent-light"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.title}

                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="
                      absolute -bottom-2 left-0
                      h-px w-full
                      bg-accent
                      shadow-[0_0_10px_rgba(139,92,246,0.8)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                {!isActive && (
                  <span
                    className="
                      absolute -bottom-2 left-0
                      h-px w-0 bg-accent/60
                      transition-all duration-300
                      group-hover:w-full
                    "
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}