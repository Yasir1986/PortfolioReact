import React from "react";
import { contactItems } from "../constant/data";
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
// motion
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animation";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container grid gap-10 md:grid-cols-2 
        md:divide-x md:divide-neutral-800"
      >
        {/* content */}
        <div>
          <motion.h2 variants={fadeInUp}>Get in touch</motion.h2>
          <motion.p variants={fadeInUp} className="mt-3.5 mb-7">
            I'm currently open to new opportunities. Whether you have a
            question or just want to say hi, feel free to drop a message!
          </motion.p>
          {/* List */}
          <motion.ul variants={fadeInUp}>
            {contactItems.map((item) => (
              <li key={item.id} className="flex items-center gap-1.5">
                <p className="text-white font-semibold">{item.label}</p>
                <a href="#">{item.link}</a>
              </li>
            ))}
          </motion.ul>
          {/*   Social Profiles */}
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
        {/* Form */}
        <motion.form variants={fadeIn} action="" className="grid gap-5">
          {/* Input field */}
          <div className="grid gap-2">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              placeholder="Your name"
              className="input"
              required
            />
          </div>
          {/* Input field */}
          <div className="grid gap-2">
            <label htmlFor="email">Email *</label>
            <input
              type="text"
              placeholder="Your email"
              className="input"
              required
            />
          </div>
          {/* Text area */}
          <div className="grid gap-2">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              placeholder="Message"
              className="h-40 border border-neutral-800 indent-4 py-2 resize-none"
              required
            />
          </div>
          <button className="primary-btn max-w-max">Send Message</button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
