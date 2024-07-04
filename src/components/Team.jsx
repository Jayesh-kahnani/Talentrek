import React from "react";

const Team = () => {
  return (
    <section id="team"
      className="mt-5 mx-auto mb-3 max-w-5xl rounded-3xl p-8 flex flex-col items-center bg-champagne"
    >
      <h2 data-aos="fade-up" className="text-3xl font-bold mb-8 text-gray-800">
        Our Team
      </h2>
      <div data-aos="fade-up"  className="flex flex-wrap justify-center gap-8">
        {/* Jayesh's Card */}
        <div className="w-80 bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <img
            src="/jayesh1.jpg"
            alt="Jayesh"
            className="rounded-full mb-4 w-32 h-32 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Jayesh</h3>
          <p className="text-gray-600 text-center mb-4">Founder</p>
          <p className="text-gray-700 leading-relaxed">
            Jayesh is the visionary leader behind Talentrek, dedicated to
            bridging the gap between youth potential and industry needs. With a
            passion for nurturing young talent, Jayesh ensures that Talentrek
            offers innovative solutions for both candidates and companies.
          </p>
        </div>

        {/* Rehaan's Card */}
        <div className="w-80 bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <img
            src="/rehaan.jpeg"
            alt="Rehaan"
            className="rounded-full mb-4 w-32 h-32 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Rehaan</h3>
          <p className="text-gray-600 text-center mb-4">Co-founder</p>
          <p className="text-gray-700 leading-relaxed">
            As the co-founder of Talentrek, Rehaan plays a pivotal role in
            strategizing and implementing innovative approaches to streamline
            the hiring process. His expertise ensures that Talentrek offers
            tailored recruitment solutions that meet the unique needs of every
            client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
