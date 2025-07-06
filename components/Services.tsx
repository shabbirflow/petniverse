"use client";

import Image from "next/image";
import doggo1 from "@/public/images/corgi.png";
import doggo2 from "@/public/images/card3.jpg";
import doggo3 from "@/public/images/card2.jpg";
import doggo4 from "@/public/images/card1.jpg";
import siteContent from "@/bigDAWG.json";
import { Bounce, Fade, Roll, Slide } from "react-awesome-reveal";

const Services = () => {
  const { services } = siteContent;
  const { hero, about, features } = services;

  return (
    <section className="bg-blue-100">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative w-full aspect-square max-w-xl mx-auto cursor-pointer transition-transform transform hover:scale-105">
          <Fade triggerOnce>
            <Image
              src={doggo1}
              alt="Puppy in kennel"
              fill
              className="object-contain"
              priority
            />
          </Fade>
        </div>

        {/* Text */}
        <div>
          <h1 className="text-shadow-yellow-500 text-shadow-md text-4xl sm:text-5xl font-bold leading-tight text-primary cursor-pointer transition-transform transform hover:scale-105">
            <span className="text-red-500 font-extrabold">{hero.heading}</span>{" "}
            – <br />
            {hero.subheading}
          </h1>
          {hero.paragraphs.map((para, idx) => (
            <Fade cascade>
              <p
                key={idx}
                className={`${
                  idx === 0 ? "py-6" : "mt-4"
                } text-gray-700 text-xl bold`}
              >
                {para}
              </p>
            </Fade>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-4 text-center text-accent md:block hidden ">
        {about.map((para, idx) => (
          <p key={idx} className={idx > 0 ? "mt-4" : ""}>
            {para}
          </p>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-16">
        <Fade cascade damping={0.05} triggerOnce>
          {features.map((feature, idx) => {
            const dogImage = [doggo2, doggo3, doggo4][idx]; // Matching image per card

            return (
              <div
                key={idx}
                className="card bg-base-900 image-full w-full shadow-md rounded-3xl cursor-pointer hover:text-shadow-yellow-500 hover:text-shadow-xs hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <figure className="rounded-3xl overflow-hidden relative h-64">
                  <Image
                    src={dogImage}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="z-[99] rounded-b-3xl text-white justify-center text-center items-center flex flex-col">
                  <h1 className="card-title text-4xl font-bold sm:text-2xl">
                    {feature.title}
                  </h1>
                  <p className="text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>

      {/* CTA */}
      {/* <div className="bg-base-300 text-center py-10 px-4">
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">{cta.message}</p>
        <div className="mt-6">
          <button className="btn btn-accent btn-lg">{cta.button}</button>
        </div>
      </div> 

          "cta": {
      "message": "If you are still confused about buying puppies online in India, we are always here to help you! Just get in touch with us today and our team will help you to understand our breeding services and our role as dog breeders.",
      "button": "OUR CONTACT NUMBER IS"
    } */}
    </section>
  );
};

export default Services;
