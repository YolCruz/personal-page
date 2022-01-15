import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

export default function Header() {
  const [navIcon, setNavIcon] = useState("bg-hamburger-white");
  const [translateNav, setTranslateNav] = useState("-translate-x-full");
  // const [translateNav, setTranslateNav] = useState("-translate-x-0");
  const [translateHeader, setTranslateHeader] = useState("-translate-y-0");
  const [scrollY, setscrollY] = useState(0);

  const navEl = useRef<HTMLDivElement>(null);

  const navToggle = () => {
    if (navIcon === "bg-hamburger-white") {
      setNavIcon("bg-close-white");
      if (navEl.current) {
        navEl.current.focus();
      }
    } else {
      setNavIcon("bg-hamburger-white");
    }
  };
  const handleFocus = () => {
    setTranslateNav("-translate-x-0");
  };
  const handleBlur = () => {
    setNavIcon("bg-hamburger-white");
    setTranslateNav("-translate-x-full");
    // setTranslateNav("-translate-x-0");
  };
  useEffect(() => {
    window.onscroll = function () {
      if (translateNav === "-translate-x-0") {
        setNavIcon("bg-hamburger-white");
        setTranslateNav("-translate-x-full");
      }
      const currentScrollY = window.scrollY;
      if (scrollY > currentScrollY) {
        setTranslateHeader("-translate-y-0");
      } else {
        setTranslateHeader("-translate-y-full");
      }
      setscrollY(currentScrollY);
    };
  }, [scrollY, translateNav]);
  return (
    <header
        className={`fixed inset-x-0 top-0 py-2 px-1 bg-palet-1 h-auto z-10 transition-transform duration-200 ${translateHeader}`}
      >
        <button
          className={`aspect-square w-8 ${navIcon} bg-no-repeat bg-center bg-cover`}
          onClick={navToggle}
        >
          <span className="sr-only">Menu</span>
        </button>
        <nav
          ref={navEl}
          onBlur={handleBlur}
          onFocus={handleFocus}
          tabIndex={-1}
          id="primary-nav"
          className={`fixed z-50 bg-slate-800 h-super-big inset-y-0 left-0 pt-2 pl-4 right-1/3 text-white overflow-y-hidden transition-transform duration-300 ${translateNav}`}
        >
          <h1 className="text-3xl font-pacifico mb-5">Notes</h1>
          <ul className="text-md flex flex-col gap-1">
            <li className="mr-4 border-b border-opacity-50">
              <details>
                <summary>Page 1</summary>
                <Link href="/">
                  <a className="pl-8">Note 1</a>
                </Link>
              </details>
            </li>
            <li className="mr-4 border-b border-opacity-50">
              <details>
                <summary>Page 2</summary>
                <Link href="/">
                  <a className="pl-8">Note 2</a>
                </Link>
              </details>
            </li>
            <li className="mr-4">
              <details>
                <summary>Page 3</summary>
                <Link href="/">
                  <a className="pl-8">Note 3</a>
                </Link>
              </details>
            </li>
          </ul>
        </nav>
      </header>
  )
}