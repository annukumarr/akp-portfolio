import { hero } from "@/app/data/hero";

export default function Badge() {
  return (
    <div className="mb-6 inline-flex w-fit rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
      {hero.badge}
    </div>
  );
}