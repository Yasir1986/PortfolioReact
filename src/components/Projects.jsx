import React from "react";
import { Carousel } from "./ui/Carousel";
import { ProjectsItems } from "../constant/data";
// motion
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animation";

const Projects = () => {
  return (
    <section id="projects">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <motion.h2 variants={fadeInUp} className="text-center">
          Recent Projects
        </motion.h2>
        {/* Card Wrapper */}
        <motion.div
          variants={fadeIn}
          className="relative overflow-hidden w-full h-full py-20"
        >
          <Carousel slides={ProjectsItems} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
