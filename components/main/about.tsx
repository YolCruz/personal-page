import Image from "next/image";
import Typed from "typed.js";
import animations from "styles/animations.module.scss";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [anim, setAnim] = useState("");
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "solving code challenges",
        "building web applications",
        "playing video games",
        "learning new things",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      shuffle: true,
      backDelay: 1250,
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      if (typed.current) typed.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (inView) {
      setAnim(animations.move_card);
    }
  }, [inView]);

  return (
    <div
      id="about"
      className={`min-h-screen w-screen max-w-full flex items-center justify-center`}
    >
      <main
        ref={ref}
        className={`${anim} opacity-0 h-fit bg-black-1 bg-opacity-75 py-5 px-5 flex flex-col gap-12`}
      >
        <div className="h-fit flex flex-col justify-center items-center gap-10">
          <div className="border-8 border-blue-500 w-fit h-fit rounded-full flex justify-center items-center">
            <Image
              src="/Me_Avatar2.jpg"
              width={200}
              height={200}
              alt="How the developer looks"
              className="rounded-full "
            />
          </div>
          <div className="font-rubik text-3xl flex flex-col gap-2">
            <p className="text-white text-center">I am Yoltic and I enjoy</p>
            <div className="h-8 min-h-fit flex">
              <p className="text-green-1 text-center" ref={el} />
            </div>
          </div>
        </div>
        <div className="font-rubik text-white text-lg flex flex-col gap-5">
          <p>
            I love solving hard problems using computer algorithms. Especially
            the ones encountered in Advent of Code.
          </p>
          <p>
            I started coding when I was 16 years old, doing some basic scripts,
            mainly to solve math equations for my school projects.
          </p>
          <p>
            Since then I&apos;ve been coding for fun and practicing algorithms
            in webs like{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.codewars.com/users/Roseck16"
              className="text-blue-500 visited:text-purple-500"
            >
              codewars
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.codingame.com/profile/792abf33f0f0f6ea5cdf28dc233f1dfe574359"
              className="text-blue-500 visited:text-purple-500"
            >
              codingame
            </a>{" "}
            or{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://adventofcode.com"
              className="text-blue-500 visited:text-purple-500"
            >
              Advent of Code
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
