import { hero } from "@/app/data/hero";

export default function NowBuilding() {
  const { currentFocus } = hero;

  return (
    <div className="mt-10 w-full max-w-2xl rounded-2xl border border-border bg-card p-6">
      <h3 className="mb-5 text-lg font-semibold text-text-primary">
        🚀 Currently
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-text-secondary">
            Building
          </p>
          <p className="mt-2 font-medium text-text-primary">
            {currentFocus.building}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-text-secondary">
            Learning
          </p>
          <p className="mt-2 font-medium text-text-primary">
            {currentFocus.learning}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-text-secondary">
            Next Project
          </p>
          <p className="mt-2 font-medium text-text-primary">
            {currentFocus.next}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-text-secondary">
            Goal
          </p>
          <p className="mt-2 font-medium text-text-primary">
            {currentFocus.goal}
          </p>
        </div>
      </div>
    </div>
  );
}