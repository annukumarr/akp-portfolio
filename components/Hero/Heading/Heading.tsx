import { hero } from "@/app/data/hero";

export default function Heading() {
  return (
    <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
      {hero.headline}
    </h1>
  );
}