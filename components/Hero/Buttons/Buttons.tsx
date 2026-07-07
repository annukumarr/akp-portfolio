import { hero } from "@/app/data/hero";
import Button from "@/components/ui/Button";

export default function Buttons() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button>{hero.primaryButton}</Button>

      <Button variant="secondary">
        {hero.secondaryButton}
      </Button>
    </div>
  );
}