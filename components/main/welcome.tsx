import anims from "styles/animations.module.scss";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";

export default function Welcome() {
  const [anim, setAnim] = useState("");
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      setAnim(anims.show);
    } else {
      setAnim("");
    }
  }, [inView]);

  return (
    <div
      className="w-screen max-w-full font-audiowide text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center grid grid-cols-1 place-content-center relative "
      style={{
        minHeight: "calc(100vh - 2.75rem)",
      }}
    >
      <div ref={ref} className="flex flex-col">
        <p className="-tracking-[.08em] text-white">YOLTIC CRUZ TELLO</p>
        <p className="-tracking-[.01em] text-green-1">WEB DEVELOPER</p>
      </div>
      <div
        className={`absolute h-full w-full max-w-full -z-40 flex justify-center items-end pb-20 opacity-0 ${anims.icon} ${anim}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="60"
          height="60"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <path
            fill="white"
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      </div>
    </div>
  );
}
