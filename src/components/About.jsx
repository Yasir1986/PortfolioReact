import React from "react";
import { aboutItems } from "../constant/data";
import { li } from "motion/react-client";

const About = () => {
  return (
    <section className="section bg-secondary-clr">
      <div className="container">
        <h2>About me</h2>
        <p className="mt-3 mb-9">
          I'm a frontend developer with 7+ years of experience building scalable
          web applications. I specialize in React, Redux, TypeScript,
          JaveScript, Nextjs, Nx and modern CSS frameworks to deliver
          high-performance solutions. My expertise includes component
          architecture, state management, API integration, and responsive
          design. I focus on writing maintainable and reusable code and creating
          accessible user experiences. Currently working with UK biggest fashion
          e-commerce brands to transform ideas into production-ready
          applications.
        </p>
        {/* skills */}
        <div>
            <p>Skills:</p>
            <ul className="text-white font-semibold text-x1 mb-3">
                {aboutItems.map((item) => (
                    <li key={item.id}>
                        <p>✅ {item.label}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
