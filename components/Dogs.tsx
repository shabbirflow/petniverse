"use client";
import Image from "next/image";
import siteContent from "@/bigDAWG.json";
import { Slide } from "react-awesome-reveal";

const Boarding = () => (
  <div className="max-w-7xl mx-auto px-4 py-16 bg-blue-100">
    <h3 className="text-center text-lg text-gray-500 font-semibold m-2">
      What We Offer For You
    </h3>
    <h2 className="text-center text-4xl font-bold mb-12 text-shadow-yellow-500 text-shadow-sm">
      <span className="text-orange-500">Puppies available</span>{" "}
      <span className="text-gray-800">for sale in Pune</span>
    </h2>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Slide cascade damping={0.05} triggerOnce>
      {siteContent.dogs.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="w-32 h-32 mb-4 relative">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
            <h3 className="text-xl text-primary font-bold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        
      ))}
      </Slide>
    </div>
  </div>
);

export default Boarding;
