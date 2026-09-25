import Image from "next/image";

import { brand } from "@/app/data/brand";

import ResumeActions from "@/components/Brand/ResumeActions/ResumeActions";

type AboutContentProps = {
  onOpenBrandCard: () => void;
};

export default function AboutContent({
  onOpenBrandCard,
}: AboutContentProps) {
  return (
    <div className="grid gap-16 lg:grid-cols-[380px_1fr] lg:items-start">
      {/* Left Side */}
      <div className="flex flex-col items-center">
        {/* Profile */}
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <Image
            src={brand.card.front.photo}
            alt={brand.about.name}
            width={380}
            height={460}
            priority
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Resume Actions */}
        <div className="mt-8 w-full">
          <ResumeActions
            onOpenBrandCard={onOpenBrandCard}
          />
        </div>
      </div>

      {/* Right Side */}
      <div>
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-400">
          ABOUT ME
        </p>

        <h2 className="mt-4 text-5xl font-bold tracking-tight text-white">
          {brand.about.name}
        </h2>

        <p className="mt-3 text-xl font-medium text-violet-400">
          {brand.about.role}
        </p>

        {/* Bio */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          {brand.about.bio}
        </p>

        {/* Details */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Education
            </h3>

            <p className="mt-3 text-white">
              {brand.about.education}
            </p>

            <p className="mt-2 text-zinc-400">
              {brand.about.university}
            </p>

            <p className="text-zinc-500">
              {brand.about.session}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Location
            </h3>

            <p className="mt-3 text-white">
              {brand.about.location}
            </p>

            <h3 className="mt-8 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Email
            </h3>

            <p className="mt-3 break-all text-white">
              {brand.about.email}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Skills
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">
            {brand.about.skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  border
                  border-zinc-700
                  bg-zinc-900
                  px-4
                  py-2
                  text-sm
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:border-violet-500
                  hover:bg-violet-500/10
                  hover:text-white
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12">
          <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Connect
          </h3>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href={brand.about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm text-white transition hover:border-violet-500 hover:bg-violet-500/10"
            >
              LinkedIn
            </a>

            <a
              href={brand.about.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm text-white transition hover:border-violet-500 hover:bg-violet-500/10"
            >
              Instagram
            </a>

            <a
              href="https://github.com/annukumarr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 px-5 py-3 text-sm text-white transition hover:border-violet-500 hover:bg-violet-500/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}