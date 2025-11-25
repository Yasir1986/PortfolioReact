import React from "react";
import { aboutItems } from "../constant/data";
// motion
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animation";

const About = () => {
  return (
    <section className="section bg-secondary-clr" id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        <motion.h2 variants={fadeInUp}>About me</motion.h2>
        <motion.p variants={fadeInUp} className="mt-3 mb-9">
          I'm a frontend developer with 7+ years of experience building scalable
          web applications. I specialize in React, Redux, TypeScript,
          JaveScript, Nextjs, Nx and modern CSS frameworks to deliver
          high-performance solutions. My expertise includes component
          architecture, state management, API integration, and responsive
          design. I focus on writing maintainable and reusable code and creating
          accessible user experiences. Currently working with UK biggest fashion
          e-commerce brands to transform ideas into production-ready
          applications.
        </motion.p>
        {/* skills */}
        <div>
          <motion.p variants={fadeInUp}>Skills:</motion.p>
          <motion.ul variants={fadeIn}>
            {aboutItems.map((item) => (
              <li key={item.id}>
                <p>✅ {item.label}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
