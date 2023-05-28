import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import ScrollIndicator from "@/components/Scroll/Scroll";
import Skills from "@/components/Skills/Skills";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <ScrollIndicator>
      <section>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonial />
        <Contact />
      </section>
    </ScrollIndicator>
  )
}
