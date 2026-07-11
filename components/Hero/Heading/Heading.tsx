import { hero } from "@/app/data/hero";

export default function Heading() {
  return (
    <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
      {hero.headline.primary}{" "}
      <span className="bg-gradient-to-r from-accent via-accent-light to-text-primary bg-clip-text text-transparent">
        {hero.headline.accent}
      </span>
    </h1>
  );
}