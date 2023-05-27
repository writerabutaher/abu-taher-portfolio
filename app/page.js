import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import ScrollIndicator from "@/components/Scroll/Scroll";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <ScrollIndicator>
      <section>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </section>
    </ScrollIndicator>
  )
}
