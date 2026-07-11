"use client";

import { useEffect, useState } from "react";
import { navbar } from "@/app/data/navbar";

export default function NavbarLinks() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navbar.links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
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
                className={`relative text-sm transition duration-300 ${
                  isActive
                    ? "text-accent-light"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.title}

                <span
                  className={`absolute -bottom-2 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}