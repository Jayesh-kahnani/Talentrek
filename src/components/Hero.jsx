import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section id="hero"
      className="relative bg-blackish-blue rounded-3xl mx-auto mb-3 mt-4 w-5/6"
      style={{ height: "calc(100vh - 2rem)" }}
    >
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/people.jpeg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="rounded-3xl"
        />
      </div>
      <div className="relative z-10 text-center p-6 text-champagne flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to Talentrek</h1>
        <p className="text-lg mb-8">
          Bridging the gap between ambitious youth and industry-relevant
          companies.
        </p>
        <ScrollLink
          to="services"
          smooth={true}
          duration={800}
          className="bg-hover-bg text-champagne py-3 px-6 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer"
        >
          Explore Our Services
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
