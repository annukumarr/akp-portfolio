import { hero } from "@/app/data/hero";

export default function Heading() {
  return (
    <div className="mt-4">
      <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
        {hero.headline.primary}

        <span className="mt-3 block bg-gradient-to-r from-accent via-accent-light to-white bg-clip-text text-transparent">
          {hero.headline.accent}
        </span>
      </h1>
    </div>
  );
}