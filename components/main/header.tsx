import { useState, useRef } from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  //* States
  const [translateNav, setTranslateNav] = useState("-translate-x-full");

  //* Refs
  const navEl = useRef<HTMLDivElement>(null);

  //* Handlers
  const navToggle = () => {
    if (navEl.current) {
      navEl.current.focus();
    }
  };
  const handleFocus = () => {
    setTranslateNav("-translate-x-0");
  };
  const handleBlur = () => {
    setTranslateNav("-translate-x-full");
  };

  return (
    <header
      className={`bg-blue-2 absolute z-20 w-screen h-11 max-w-full transition-transform duration-200 flex justify-start`}
    >
      <button
        className={`aspect-square w-fit my-auto ml-2.5 md:hidden`}
        onClick={navToggle}
      >
        <Icon
          icon="charm:menu-hamburger"
          color="white"
          width="35"
          height="35"
        />
        <span className="sr-only">Menu</span>
      </button>
      <nav
        id="navbar"
        className={`fixed z-50 h-screen overflow-y-hidden inset-y-0 left-0 right-2/10 bg-black bg-opacity-70 flex flex-col justify-between pt-36 px-5 pb-5 transition-transform duration-300 ${translateNav} md:h-16 md:w-screen md:translate-x-0 md:flex-row md:py-0 md:bg-blue-2 md:bg-opacity-100 md:absolute md:items-center md:text-xl lg:text-3xl`}
        ref={navEl}
        onBlur={handleBlur}
        onFocus={handleFocus}
        tabIndex={-1}
      >
        <div className="flex flex-col gap-12 md:flex-row md:gap-8 xl:gap-20 font-rubik text-green-1 text-2xl">
          <a href="#about">ABOUT</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/YolCruz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="jam:github-square"
              color="white"
              width="60"
              height="60"
            />
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yolcruztello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="jam:linkedin-square"
              color="white"
              width="60"
              height="60"
            />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
