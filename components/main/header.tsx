import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSpring, animated } from "react-spring";

export default function Header() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  //* States
  const [translateNav, setTranslateNav] = useState("-translate-x-full");
  const [scrollY, setScrollY] = useState(0);

  //* Refs
  const navEl = useRef<HTMLDivElement>(null);

  //* Scroll
  // useEffect(() => {
  //   window.onscroll = function () {
  //     if (translateNav === "-translate-x-0") {
  //       setTranslateNav("-translate-x-full");
  //     }
  //     const currentScrollY = window.scrollY;
  //     if (scrollY > currentScrollY) {
  //       setTranslateHeader("-translate-y-0");
  //     } else {
  //       setTranslateHeader("-translate-y-full");
  //     }
  //     setScrollY(currentScrollY);
  //   };
  // }, [scrollY, setTranslateNav, translateNav]);

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
    <div
      className={`bg-black fixed z-20 inset-x-0 top-0 h-16 max-w-full transition-transform duration-200 flex justify-start`}
    >
      <button
        className={`aspect-square w-10 bg-hamburger-white bg-center bg-no-repeat my-auto ml-2 md:hidden`}
        onClick={navToggle}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav
        id="navbar"
        className={`fixed z-50 h-super-big overflow-y-hidden inset-y-0 left-0 right-2/10 bg-dark-blue-main-3 text-white text-3xl flex flex-col gap-12 pt-10 px-5 transition-transform duration-300 ${translateNav} md:h-16 md:top-0 md:bottom-2/4 md:inset-x-0 md:translate-x-0 md:flex-row md:py-3 md:text-xl lg:text-3xl`}
        ref={navEl}
        onBlur={handleBlur}
        onFocus={handleFocus}
        tabIndex={-1}
      >
        <h1 className="font-roboto-slab text-4.5xl text-center">YC</h1>
        <div className="flex flex-col gap-8 md:flex-row md:gap-8 xl:gap-20 font-roboto-slab">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/websites">
              <a>Portfolio</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
        </div>
      </nav>
    </div>
  );
}
