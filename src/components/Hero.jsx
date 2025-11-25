import React from "react";
import { heroIcons } from "../constant/data";
import { BackgroundGradient } from "../components/ui/BackgroundGradient";
import Button from "./Button";
// motion
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, fadeInUp } from "../motion/animation";

const Hero = () => {
  return (
    <section className="py-28 lg:pt-40" id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container flex flex-col items-center"
      >
        {/*  image */}
        <motion.div variants={fadeIn}>
          <BackgroundGradient
            containerClassName="w-72 h-72 lg:w-80 lg:h-80 rounded-full"
            className="w-full h-full rounded-full bg-zinc-900"
          >
            <figure className="rounded-full overflow-hidden">
              <img
                src="/images/hero-img.png"
                alt="Yasir Akbar"
                className="w-full h-full object-cover"
              />
            </figure>
          </BackgroundGradient>
        </motion.div>
        {/*   content */}
        <div className="text-center mt-8">
          <motion.h1
            variants={fadeIn}
            className="text-3xl lg:text-5xl mb-1.5 font-bold"
          >
            Hi, I am Yasir Akbar
          </motion.h1>
          <motion.h2 variants={fadeInUp}>
            Senior Frontend / Software Developer
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-[820px] mx-auto mt-4 mb-6"
          >
            Hi, I’m Yasir Akbar Senior Frontend Developer & Software Engineer
            With 7+ years of experience, I build seamless, high-performance
            interfaces that blend elegant design with strong engineering
            principles. I excel at turning complex business requirements into
            scalable, user-focused applications using modern frontend ecosystems
            and best-practice development workflows. I’ve also worked on one of
            the largest fashion e-commerce platforms in the UK, delivering
            robust, high-traffic, and performance-driven user experiences at
            scale.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center gap-5"
          >
            {heroIcons.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors"
              >
                <item.icon size={30} />
              </a>
            ))}
          </motion.div>
          {/* btn wrapper */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex items-center justify-center 
          flex-wrap gap-5"
          >
            <a href="/YasirAkbar_CV.pdf" alt="Download CV" download>
              <Button label="Download CV" classes="primary-btn" icon />
            </a>
            <a href="#contact">
              <Button label="Let's Collaborate" classes="secondary-btn" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
