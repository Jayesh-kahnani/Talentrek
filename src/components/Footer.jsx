import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blackish-blue text-champagne py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="mt-2">Email: contact@talentrek.com</p>
            <p>Phone: +1-123-456-7890</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex mt-2">
              <a
                href="#"
                className="mr-4 hover:text-gray-300 transition duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="mr-4 hover:text-gray-300 transition duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-gray-300 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; 2024 Talentrek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
