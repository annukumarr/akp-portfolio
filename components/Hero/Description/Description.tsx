import { hero } from "@/app/data/hero";

export default function Description() {
  return (
    <p className="mt-8 max-w-xl text-xl leading-9 text-text-secondary">
      {hero.currentFocus.building}. Currently focused on{" "}
      {hero.currentFocus.learning}, building{" "}
      {hero.currentFocus.next}, and working toward{" "}
      {hero.currentFocus.goal}.
    </p>
  );
}