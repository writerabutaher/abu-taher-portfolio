"use client";

import Contact from "@/components/Contact/Contact";
import ScrollIndicator from "@/components/Scroll/Scroll";
import Testimonial from "@/components/Testimonial/Testimonial";
import { About } from "@/components/about/About";
import { Hero } from "@/components/hero/Hero";
import { Heading } from "@/components/nav/Heading";
import { SideBar } from "@/components/nav/SideBar";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
  return (
    <ScrollIndicator>
      <div className="grid" style={{ gridTemplateColumns: "60px 1fr" }}>
        <SideBar />
        <main>
          <Heading />
          <Hero />
          <About />
          <Projects />
          {/* <Testimonial />
          <Contact /> */}
        </main>
      </div>
    </ScrollIndicator>
  );
}
