import { hero } from "@/app/data/hero";

export default function SocialProof() {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {hero.philosophy.map((item) => (
        <span
          key={item}
          className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition duration-300 hover:border-border-hover hover:text-text-primary"
        >
          {item}
        </span>
      ))}
    </div>
  );
}