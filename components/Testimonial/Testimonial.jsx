"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaQuoteRight } from "react-icons/fa";
import { LOOP } from "@splidejs/splide";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./Testimonial.module.scss";
import { Reveal } from "../utils/Reveal";

const Testimonial = () => {
  return (
    <div
      id="testimonial"
      className="section-wrapper hidden xl:block">
      <SectionHeader
        title="Testimonial"
        dir="r"
      />
      <Reveal width="100%">
        <Splide
          options={{
            perPage: 2,
            arrows: false,
            pagination: true,
            perMove: 1,
            rewind: true,
            autoplay: true,
            type: LOOP,
          }}>
          {testimonials.map((e, i) => {
            const { name, text, work } = e;
            return (
              <SplideSlide
                className={
                  "flex flex-col md:flex-row items-center justify-center"
                }
                key={i}>
                <div className={`${styles.splideCard} space-y-4`}>
                  <div>
                    <p className={styles.splideText}>{text}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="border-teal-500 border-2 md:w-24 w-16"></div>
                      <h1 className="md:text-4xl text-2xl text-gray-200">
                        {name}
                        <br />
                        <span className="md:text-3xl text-xl">{work}</span>
                      </h1>
                    </div>
                    <div>
                      <FaQuoteRight
                        className="text-teal-500"
                        size={"3rem"}
                      />
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </Reveal>
    </div>
  );
};

const testimonials = [
  {
    name: "Asif Sikder",
    text: " I highly recommend Abu Taher for any web development role. Their exceptional skills, dedication, and passion for their work make them a valuable asset to any team.",
    work: "Web Developer",
  },
  {
    name: "Parvez Ahmed",
    text: "I have had the pleasure of working closely with Abu Taher on several web development projects and works. So, I must say, their skills and dedication impression on me.",
    work: "Web Developer",
  },
  {
    name: "Sayed Siam",
    text: "Abu Taher possesses an impressive skill set in both Front-End and Back-End technologies, Front-End is much more better allowing them to excel in various aspects of web development.",
    work: "Web Developer",
  },
];

export default Testimonial;
