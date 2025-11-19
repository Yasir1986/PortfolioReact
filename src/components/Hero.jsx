import React from "react";
import { heroIcons } from "../constant/data";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="py-28 lg:pt-40">
      <div className="container flex flex-col items-counter">
        {/*  image */}
        <figure className="rounded-full overflow-hidden flex justify-center">
          <img
            src="/images/hero-img.png"
            alt="Yasir Akbar"
            height={452}
            width={452}
          />
        </figure>
        {/*   content */}
        <div className="text-center mt-8">
          <h1 className="text-3xl lg:text-5xl mb-1.5 font-bold">
            Hi, I am Yasir Akbar
          </h1>
          <h2>Senior Frontend Developer</h2>
          <p className="max-w-[820px] mx-auto mt-4 mb-6">
            I'm Yasir Akbar, a frontend developer who architects seamless
            digital experiences through innovative code and intuitive design.
            With expertise in cutting-edge technologies and a passion for
            performance optimization, I transform complex business requirements
            into scalable, user-centric applications that drive meaningful
            engagement.
          </p>

          <div className="flex items-center justify-center gap-5">
            {heroIcons.map((item) => (
              <a
                href="#"
                target="_blank"
                className="hover:text-indigo-400 transition-colors"
              >
                <item.icon size={30} />
              </a>
            ))}
          </div>

          {/* btn wrapper */}
          <div
            className="mt-10 flex items-center justify-center 
        flex-wrap gap-5"
          >
            <Button label="Download CV" classes="primary-btn" icon />
            <Button label="Let's Collaborate" classes="secondary-btn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
