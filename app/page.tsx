import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center">
      <Container>
        <div className="text-center">
          <SectionTitle title="Project AKP" />

          <p className="mt-6 text-xl text-gray-400">
            Learn Deep. Build Bold. Leave Impact.
          </p>

          <div className="mt-10">
            <Button>Start Journey 🚀</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}