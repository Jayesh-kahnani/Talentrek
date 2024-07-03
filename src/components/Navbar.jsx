import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="mt-5 mx-auto mb-3 w-5/6 rounded-3xl p-4 flex flex-row items-center bg-custom-nav">
      <div className="ml-3">
        <Link href="/">
          <img src="T_crop.png" alt="Logo" className="w-12 h-10" />
        </Link>
      </div>

      <nav className="ml-auto">
        <ul className="flex text-lg space-x-8  mr-8">
          <li>
            <Link
              href="#about"
              className="hover:bg-blackish-blue hover:text-champagne rounded-lg p-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="hover:bg-blackish-blue hover:text-champagne rounded-lg p-4"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#team"
              className="hover:bg-blackish-blue hover:text-champagne rounded-lg p-4"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:bg-blackish-blue hover:text-champagne rounded-lg p-4"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
