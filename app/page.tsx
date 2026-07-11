import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Journey />
      <Projects />
    </main>
  );
}