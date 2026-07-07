import { hero } from "@/app/data/hero";

export default function SocialProof() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {hero.philosophy.map((item) => (
        <span
          key={item}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}