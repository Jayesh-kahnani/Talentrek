import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="about"
      className="bg-blackish-blue py-12 rounded-3xl mx-auto mb-3 w-5/6"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2" data-aos="fade-right">
            <Image
              src="/indian-youth.jpeg"
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-champagne">About Us</h2>
            <p className="mt-4 text-champagne">
              Talentrek is dedicated to bridging the gap between ambitious youth
              and industry-relevant companies. Our mission is to provide
              ready-to-hire interns and freshers, expertly matched to meet the
              specific needs of businesses across various industries.
            </p>
            <p className="mt-4 text-champagne">
              Founded by Jayesh and Rehaan, Talentrek aims to ignite potential
              and foster growth, creating a dynamic future where talent meets
              opportunity.
            </p>
            <p className="mt-4 text-champagne">
              We offer flexible placements, continuous opportunities, and
              project-based payments to ensure a mutually beneficial experience
              for both interns and companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
