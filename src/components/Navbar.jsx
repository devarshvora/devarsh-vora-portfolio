import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import sample from "../assets/sample.png"; // ✅ keep just this one
import { navLinks } from "../constants";
import { scrollToSection } from "../lib/helperFunctions";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="nav-styles sm:px-16 px-6"
    >
      {/* Logo */}
      <a href="#home">
        <img
          src={sample}
          alt="My Logo"
          className="w-[90px] h-[90px] object-contain"
        />
      </a>

      {/* List of links */}
      <ul className="list-none lg:flex hidden justify-end items-center flex-1 py-4 gap-5">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="font-poppins font-normal text-[14px] text-white hover:text-teal-200"
          >
            <a href={`#${nav.id}`} onClick={(event) => { event.preventDefault(); scrollToSection(nav.id); }}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* only for mobile devices */}
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <button type="button" onClick={() => setToggle((prev) => !prev)} aria-label={toggle ? "Close navigation" : "Open navigation"} aria-expanded={toggle} aria-controls="mobile-navigation" className="p-2">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />
        </button>

        <div
          id="mobile-navigation"
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] max-h-[calc(100dvh-110px)] overflow-y-auto rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${nav.id}`} onClick={() => setToggle(false)}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
