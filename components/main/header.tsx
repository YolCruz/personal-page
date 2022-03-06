import React, { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  //* States
  const [translateNav, setTranslateNav] = useState("-translate-x-full");

  //* Refs
  const ref = useClickOutside(() => setTranslateNav("-translate-x-full"));

  return (
    <header
      className={`bg-blue-2 absolute z-20 w-screen h-11 max-w-full transition-transform duration-200 flex justify-start`}
    >
      <button
        className={`aspect-square w-fit my-auto ml-2.5 md:hidden`}
        onClick={() => setTranslateNav("-translate-x-0")}
      >
        <FiMenu color="white" size="2.1875rem" />
        <span className="sr-only">Menu</span>
      </button>
      <nav
        id="navbar"
        className={`fixed z-50 h-screen overflow-y-hidden inset-y-0 left-0 right-2/10 bg-black bg-opacity-70 flex flex-col justify-between pt-36 px-5 pb-5 transition-transform duration-300 ${translateNav} md:h-16 md:w-screen md:max-w-full md:translate-x-0 md:flex-row md:py-0 md:bg-blue-2 md:bg-opacity-100 md:absolute md:items-center md:text-xl lg:text-3xl`}
        ref={ref}
      >
        <div className="flex flex-col gap-12 md:flex-row md:gap-8 xl:gap-20 font-rubik text-green-1 text-2xl">
          <a href="#about">ABOUT</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div className="flex gap-2 items-center mb-28">
          <a
            href="https://github.com/YolCruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub
              color="white"
              size="3.25rem"
              className="border-4 p-2 rounded-lg"
            />
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yolcruztello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn
              color="white"
              size="3.25rem"
              className="border-4 p-2 rounded-lg"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
