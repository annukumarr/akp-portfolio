import { hero } from "@/app/data/hero";

export default function Description() {
  return (
    <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
      {hero.description}
    </p>
  );
}