import React from "react";
import { Carousel } from "./ui/Carousel";
import { ProjectsItems } from "../constant/data";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        {/* Title */}
        <h2 className="text-center">Recent Projects</h2>
        {/* Card Wrapper */}
        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={ProjectsItems} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
