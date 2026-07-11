"use client";

import { useState } from "react";
import { navbar } from "@/app/data/navbar";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((previousState) => !previousState)}
        className="relative z-[10001] flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-white transition hover:border-zinc-600"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="text-xl">{isOpen ? "×" : "☰"}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-[10000] bg-black">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto h-full max-w-6xl px-6 py-12"
          >
            <ul className="flex flex-col gap-8">
              {navbar.links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-medium text-zinc-400 transition hover:text-white"
                  >
                    {link.title}
                  </a>
                </li>
              ))}

              <li className="pt-4">
                <a
                  href={navbar.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex rounded-lg border border-zinc-700 px-5 py-3 text-base text-white transition hover:border-zinc-500"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}