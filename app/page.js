"use client"

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
// import Hero from "@/components/Hero1/Hero";
import Projects from "@/components/Projects/Projects";
import ScrollIndicator from "@/components/Scroll/Scroll";
import Skills from "@/components/Skills/Skills";
import Testimonial from "@/components/Testimonial/Testimonial";
import { Hero } from "@/components/hero/Hero";
import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";

export default function Home() {
  return (
    <ScrollIndicator>
      <div className="grid" style={{ "grid-template-columns": "60px 1fr" }}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          {/* <Hero /> */}
          {/* <About /> */}
          {/* <Skills /> */}
          {/* <Projects /> */}
          {/* <Testimonial /> */}
          {/* <Contact /> */}
        </main>
      </div>
    </ScrollIndicator>
  )
}
