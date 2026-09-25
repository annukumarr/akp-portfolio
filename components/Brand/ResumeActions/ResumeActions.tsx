"use client";

import {
  Download,
  Eye,
  CreditCard,
} from "lucide-react";

type ResumeActionsProps = {
  onOpenBrandCard: () => void;
};

export default function ResumeActions({
  onOpenBrandCard,
}: ResumeActionsProps) {
  return (
    <div className="mt-8 flex flex-col gap-4">
      {/* View Resume */}
      <a
        href="/resume/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-zinc-900 p-3 text-white transition group-hover:scale-105">
            <Eye size={18} />
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900">
              View Resume
            </h3>

            <p className="text-sm text-zinc-500">
              Open resume in a new tab
            </p>
          </div>
        </div>
      </a>

      {/* Download Resume */}
      <a
        href="/resume/resume.pdf"
        download
        className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-zinc-900 p-3 text-white transition group-hover:scale-105">
            <Download size={18} />
          </div>

          <div>
            <h3 className="font-semibold text-zinc-900">
              Download Resume
            </h3>

            <p className="text-sm text-zinc-500">
              Save PDF to your device
            </p>
          </div>
        </div>
      </a>

      {/* Brand Card */}
      <button
        type="button"
        onClick={onOpenBrandCard}
        className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-900 px-5 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/10 p-3 transition group-hover:scale-105">
            <CreditCard size={18} />
          </div>

          <div className="text-left">
            <h3 className="font-semibold">
              View Brand Card
            </h3>

            <p className="text-sm text-zinc-300">
              Interactive premium business card
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}