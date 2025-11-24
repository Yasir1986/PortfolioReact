import { filter } from "motion/react-client";

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const fadeIn = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

export const fadeInUp = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};
