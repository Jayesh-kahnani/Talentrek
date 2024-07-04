import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Services = () => {
  const [activeTab, setActiveTab] = useState("candidates");

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
    });
  }, []);

  return (
    <section
      id="services"
      className="bg-champagne py-12 rounded-3xl mt-4 mx-auto mb-3 h-full w-5/6"
    >
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center text-blackish"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <div className="mt-8">
          <div className="flex justify-center mb-8" data-aos="fade-up">
            <button
              className={`mr-4 px-6 py-3 text-lg font-semibold rounded-lg focus:outline-none ${
                activeTab === "candidates"
                  ? "bg-brownish text-blackish border-b-4 border-blackish"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("candidates")}
            >
              For Candidates
            </button>
            <button
              className={`px-6 py-3 text-lg font-semibold rounded-lg focus:outline-none ${
                activeTab === "companies"
                  ? "bg-brownish text-blackish border-b-4 border-blackish"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab("companies")}
            >
              For Companies
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg" data-aos="fade-up">
            {activeTab === "candidates" && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2" data-aos="fade-right">
                  <img
                    src="/people.jpeg"
                    alt="Candidates"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div
                  className="md:w-1/2 md:ml-8 mt-8 md:mt-0"
                  data-aos="fade-left"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At Talentrek, we understand that your career journey is
                    unique. That&apos;s why we offer personalized job matching,
                    connecting you with opportunities that align with your
                    passions and skills.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Receive comprehensive career support including guidance on
                    resume building, interview preparation, and ongoing career
                    development to ensure you&apos;re well-equipped for success.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Benefit from vetted opportunities with reputable companies,
                    where you can grow and develop through continuous support
                    and resources tailored to your career goals.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "companies" && (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2" data-aos="fade-right">
                  <Image
                    src="/company.jpeg"
                    alt="Companies"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div
                  className="md:w-1/2 md:ml-8 mt-8 md:mt-0"
                  data-aos="fade-left"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Talentrek offers a tailored recruitment process to meet your
                    specific hiring needs. We carefully vet candidates, ensuring
                    they match your company&apos;s culture and requirements.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Streamline your hiring process with efficiency. From
                    sourcing to initial interviews, we save you time and
                    resources, allowing you to focus on what matters
                    most—growing your team.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Access a diverse talent pool of young professionals who
                    bring fresh perspectives and innovative ideas to your
                    organization. Our ongoing support ensures successful
                    integration and long-term team cohesion.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
