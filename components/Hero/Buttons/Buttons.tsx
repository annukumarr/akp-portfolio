import { hero } from "@/app/data/hero";
import Button from "@/components/ui/Button";

export default function Buttons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button href="#journey">
        {hero.primaryButton}
      </Button>

      <Button
        href="https://github.com/annukumarr"
        variant="secondary"
        external
      >
        {hero.secondaryButton}
      </Button>
    </div>
  );
}