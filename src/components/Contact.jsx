import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactItems } from "../constant/data";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
// motion
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animation";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tiutuer", // replace with your EmailJS service ID
        "template_r9j3ywp", // replace with your EmailJS template ID
        form.current,
        "ABlmrF0xNUHlckvUz" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent successfully!");
          e.target.reset(); // clear form
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-20" id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800"
      >
        {/* Left content */}
        <div>
          <motion.h2 variants={fadeInUp}>Get in touch</motion.h2>
          <motion.p variants={fadeInUp} className="mt-3.5 mb-7">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hi, feel free to drop a message!
          </motion.p>

          <motion.ul variants={fadeInUp}>
            {contactItems.map((item) => (
              <li key={item.id} className="flex items-center gap-1.5">
                <p className="text-white font-semibold">{item.label}</p>
                <a href="#">{item.link}</a>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeIn}
            className="flex items-center gap-2 mt-6"
          >
            <a
              href="https://www.linkedin.com/in/yasir-akbar-2b534513b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hover:text-neutral-300 transition-colors">
                <RiLinkedinBoxFill size={30} />
              </button>
            </a>
            <a
              href="https://github.com/Yasir1986"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="hover:text-neutral-300 transition-colors">
                <RiGithubFill size={30} />
              </button>
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={fadeIn}
          className="grid gap-5"
        >
          <div className="grid gap-2">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input"
              required
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input"
              required
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="message">Message *</label>
            <textarea
              name="message"
              placeholder="Your message"
              className="h-40 border border-neutral-800 indent-4 py-2 resize-none"
              required
            />
          </div>
          <button className="primary-btn max-w-max" type="submit">
            Send Message
          </button>
          {successMessage && (
            <p className="mt-3 text-green-400 font-semibold">
              {successMessage}
            </p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
