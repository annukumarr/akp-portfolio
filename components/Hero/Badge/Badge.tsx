import { hero } from "@/app/data/hero";

export default function Badge() {
  return (
    <div className="mb-6 inline-flex w-fit rounded-full border border-border bg-surface-soft px-4 py-2 text-sm text-accent-light">
      {hero.badge}
    </div>
  );
}