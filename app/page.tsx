import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Journey />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}