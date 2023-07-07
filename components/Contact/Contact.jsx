"use client";

import React from "react";
import { BiPaperPlane } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./contact.module.scss";
import { StandardButton } from "../buttons/StandardButton";
import { Reveal } from "../utils/Reveal";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qgphhsg",
        "template_4ppbp5e",
        e.target,
        "0pumzPs-utAHFpwOv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Successfully sent message");
  };

  return (
    <div
      id="contact"
      className="section-wrapper">
      <SectionHeader
        title="Contact"
        dir="l"
      />
      <Reveal width="100%">
        <form
          onSubmit={sendEmail}
          className="grid sm:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="fullName"
              className={`inline-block text-white mb-2 ${styles.text}`}>
              Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              className={`${styles.text} w-full bg-transparent text-white border-2 focus:border-teal-500 rounded outline-none transition duration-100 px-3 py-2`}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className={`inline-block text-white mb-2 ${styles.text}`}>
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className={`${styles.text} w-full bg-transparent text-white border-2 focus:border-teal-500 rounded outline-none transition duration-100 px-3 py-2`}
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className={`inline-block text-white mb-2 ${styles.text}`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`${styles.text} w-full h-52 bg-transparent text-white border-2 focus:border-teal-500 rounded outline-none transition duration-100 px-3 py-2`}
              required></textarea>
          </div>

          <div className="sm:col-span-2 flex justify-between items-center">
            <StandardButton>
              <BiPaperPlane
                size={"2.2rem"}
                className="inline mx-1"
              />{" "}
              Send
            </StandardButton>
          </div>
        </form>
      </Reveal>
    </div>
  );
};

export default Contact;
