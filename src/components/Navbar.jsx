import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset; // Fallback for SSR
      const scrolled = currentScrollPos > 50;

      // Check scroll direction
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        // Scrolling down
        setIsScrolled(false);
      } else {
        // Scrolling up or at the top
        setIsScrolled(scrolled);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Check if window is defined (client-side rendering)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  // Function to calculate centered offset
  const calculateCenterOffset = (elementHeight) => {
    const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
    return Math.max(0, (windowHeight - elementHeight) / 2);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 mx-auto w-5/6 rounded-3xl p-4 mt-3 transition duration-300 ease-in-out ${
        isScrolled
          ? "bg-champagne text-blackish-blue shadow-lg"
          : "bg-transparent text-champagne"
      }`}
    >
      <div className="mx-auto flex items-center justify-between">
        <div className="ml-3">
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <img src="T_crop.png" alt="Logo" className="w-12 h-10" />
          </ScrollLink>
        </div>

        <nav className="ml-auto">
          <ul className="flex text-lg space-x-8">
            <li>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                offset={
                  -calculateCenterOffset(
                    typeof window !== "undefined" ? window.innerHeight * 0.8 : 0
                  )
                } // Adjust 0.8 to change the proportion of screen height
                className={`cursor-pointer rounded-lg p-4 ${
                  isScrolled
                    ? "text-blackish-blue hover:bg-blackish-blue hover:text-champagne"
                    : "text-champagne hover:bg-champagne hover:text-blackish-blue"
                }`}
              >
                Services
              </ScrollLink>
            </li>

            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={
                  -calculateCenterOffset(
                    typeof window !== "undefined" ? window.innerHeight * 0.8 : 0
                  )
                } // Adjust 0.8 to change the proportion of screen height
                className={` cursor-pointer  rounded-lg p-4 ${
                  isScrolled
                    ? "text-blackish-blue hover:bg-blackish-blue hover:text-champagne"
                    : "text-champagne hover:bg-champagne hover:text-blackish-blue"
                }`}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="team"
                spy={true}
                smooth={true}
                duration={500}
                offset={
                  -calculateCenterOffset(
                    typeof window !== "undefined" ? window.innerHeight * 0.8 : 0
                  )
                } // Adjust 0.8 to change the proportion of screen height
                className={` cursor-pointer  rounded-lg p-4 ${
                  isScrolled
                    ? "text-blackish-blue hover:bg-blackish-blue hover:text-champagne"
                    : "text-champagne hover:bg-champagne hover:text-blackish-blue"
                }`}
              >
                Team
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={
                  -calculateCenterOffset(
                    typeof window !== "undefined" ? window.innerHeight * 0.8 : 0
                  )
                } // Adjust 0.8 to change the proportion of screen height
                className={` cursor-pointer  rounded-lg p-4 ${
                  isScrolled
                    ? "text-blackish-blue hover:bg-blackish-blue hover:text-champagne"
                    : "text-champagne hover:bg-champagne hover:text-blackish-blue"
                }`}
              >
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;