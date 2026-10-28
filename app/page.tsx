import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Voyages from "@/components/Voyages";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OffTheClock from "@/components/OffTheClock";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Voyages />
      <Projects />
      <Experience />
      <Skills />
      <OffTheClock />
      <Contact />
    </main>
  );
}
