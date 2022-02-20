import React, { useState, useRef } from "react";

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
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="35" height="35" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
        <span className="sr-only">Menu</span>
      </button>
      <nav
        id="navbar"
        className={`fixed z-50 h-screen overflow-y-hidden inset-y-0 left-0 right-2/10 bg-black bg-opacity-70 flex flex-col justify-between pt-36 px-5 pb-5 transition-transform duration-300 ${translateNav} md:h-16 md:w-screen md:max-w-full md:translate-x-0 md:flex-row md:py-0 md:bg-blue-2 md:bg-opacity-100 md:absolute md:items-center md:text-xl lg:text-3xl`}
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
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="60" height="60" preserveAspectRatio="xMidYMid meet" viewBox="-2 -2 24 24"><g fill="white"><path d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028a3.498 3.498 0 0 1-.57-.057a1.276 1.276 0 0 1-.548-.246a1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417a.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1a.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196c.16.11.293.251.397.426c.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148a3.346 3.346 0 0 1-.77-.32a2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687c-.202-.497-.183-1.054.057-1.671c.159-.05.394-.013.705.11c.311.123.54.228.684.316c.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36c.29-.11.511-.14.664-.09c.246.617.268 1.174.065 1.67c.432.465.648 1.027.648 1.688c0 .464-.056.875-.168 1.233c-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545a3.342 3.342 0 0 1-.77.32a5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04c.047.006.113.009.2.009H8.181z"/><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/></g></svg>
            <span className="sr-only">Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yolcruztello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="60" height="60" preserveAspectRatio="xMidYMid meet" viewBox="-2 -2 24 24"><g fill="white"><path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457c-.592 0-.945.398-1.1.784c-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066c1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115c-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"/><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/></g></svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
