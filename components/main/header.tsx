import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import animations from "styles/animations.module.scss";

interface Props {
  enableAnimations: boolean;
}

export default function Header(props: Props) {
  //* States
  const [translateNav, setTranslateNav] = useState("-translate-x-full");

  //* Refs
  const navEl = useRef<HTMLDivElement>(null);

  //* Scroll
  // useEffect(() => {
  //   window.onscroll = function () {
  //     if (translateNav === "-translate-x-0") {
  //       setNavIcon("bg-hamburger-white");
  //       setTranslateNav("-translate-x-full");
  //     }
  //     const currentScrollY = window.scrollY;
  //     if (scrollY > currentScrollY) {
  //       setTranslateHeader("-translate-y-0");
  //     } else {
  //       setTranslateHeader("-translate-y-full");
  //     }
  //     setscrollY(currentScrollY);
  //   };
  // }, [scrollY]);

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
    // setTranslateNav("-translate-x-0");
  };

  return (
    <header
      className={`bg-dark-blue-main-3 fixed z-20 inset-x-0 top-0 h-16 max-w-full transition-transform duration-200 flex justify-start ${
        animations.durations
      } ${props.enableAnimations ? animations.move_nav : ""} ${
        props.enableAnimations ? "-translate-y-full" : ""
      }`}
    >
      <button
        className={`aspect-square w-10 bg-hamburger-white bg-center bg-no-repeat my-auto ml-2 md:hidden`}
        onClick={navToggle}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav
        className={`fixed z-50 h-super-big overflow-y-hidden inset-y-0 left-0 right-2/10 bg-dark-blue-main-3 text-white font-kalam text-3xl flex flex-col gap-12 pt-10 px-5 transition-transform duration-300 ${translateNav} md:h-16 md:top-0 md:bottom-2/4 md:inset-x-0 md:translate-x-0 md:flex-row md:py-3 md:text-xl lg:text-3xl`}
        ref={navEl}
        onBlur={handleBlur}
        onFocus={handleFocus}
        tabIndex={-1}
      >
        <h1 className="font-dancing-script text-4.5xl text-center">YC</h1>
        <ul className="flex flex-col gap-8 md:flex-row md:gap-8 xl:gap-20">
        <li className="flex gap-3 items-center">
            <Icon
              aria-hidden="true"
              icon="ant-design:home-outlined"
              width={40}
              height={40}
            />
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="flex gap-3 items-center">
            <Icon
              aria-hidden="true"
              icon="ic:outline-web"
              width={40}
              height={40}
            />
            <Link href="/websites">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className="flex gap-3 items-center">
            <Icon
              aria-hidden="true"
              icon="icon-park-outline:notebook-one"
              width={40}
              height={40}
            />
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="flex gap-3 items-center">
            <Icon
              aria-hidden="true"
              icon="fluent:contact-card-20-regular"
              width={40}
              height={40}
            />
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li className="flex gap-3 items-center">
            <Icon
              aria-hidden="true"
              icon="bi:info-circle"
              width={40}
              height={40}
            />
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
