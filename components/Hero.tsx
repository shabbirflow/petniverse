"use client";

import Image from "next/image";
import stuff from "@/bigDAWG.json";
import { Fade } from "react-awesome-reveal";

const Hero = () => (
  <div
    className="hero relative min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/bg2.jpg')", // Make sure this image exists in /public/images/
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 backdrop-blur-xs z-0" />

    {/* Content */}
    <div className="hero-content relative z-10 w-full max-w-7xl mx-auto flex-col-reverse gap-10 lg:flex-row-reverse lg:gap-20 pt-10 px-4">
      
      {/* Image Section */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl aspect-square cursor-pointer transition-transform transform hover:scale-105">
        <Fade triggerOnce>
          <Image
            src={stuff.heroSection.image1}
            alt="Cute doggo"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </Fade>
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left flex-1">
        <Fade cascade damping={0.1} triggerOnce>
          <h1 className="text-shadow-yellow-500 text-shadow-sm text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary drop-shadow-lg tracking-tight cursor-pointer transition-transform transform hover:scale-105">
            {stuff.heroSection.title.toUpperCase()}
          </h1>
          <p className="py-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-prose text-shadow-yellow-500 text-shadow-3xs">
            {stuff.heroSection.subtitle}
          </p>
          <a
            href="#dogs"
            className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-lg responsive cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Meet the Dogs 🐶
          </a>
        </Fade>
      </div>
    </div>
  </div>
);

export default Hero;
