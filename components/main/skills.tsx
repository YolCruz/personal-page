import { Rating } from "components/layouts";
import animations from "styles/animations.module.scss";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Skills() {
  const [anim, setAnim] = useState("");
  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setAnim(`${animations.move_card}`);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`min-h-fit flex flex-col gap-6 bg-red-main-1 bg-opacity-60 rounded-t-md opacity-0 ${animations.durations} ${anim} md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:mx-auto md:mb-4`}
    >
      <h1 className="font-kalam bg-dark-red-main-1 pl-2 py-2 text-3xl sticky top-0 rounded-t-md z-10 sm:text-4xl md:text-5xl">
        Skills
      </h1>
      <div className="flex flex-col gap-3 my-3 bg-dark-red-main-2 h-fit px-3 pb-4 rounded-md font-kalam md:mx-8">
        <h1 className="text-2xl pt-3 pb-1">Web development</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <Rating skill="Typescript" rating={4} />
            <Rating skill="React JS" rating={3} />
            <Rating skill="Next JS" rating={3} />
            <Rating skill="HTML" rating={4.5} />
            <Rating skill="CSS" rating={4} />
            <Rating skill="Responsive Design" rating={3.5} />
            <Rating skill="Layout Design" rating={2.5} />
          </div>
          <div className="text-lg text-justify sm:text-xl md:text-2xl font-open-sans pb-4">
            <p>
              I have studied about the fundamentals of web development, learning
              about the design of a web page following both a{" "}
              <span className="underline decoration-green-400 decoration-2 font-bold">
                responsive and accessible
              </span>{" "}
              design.
            </p>
            <p>
              To make a web page reactive, JavaScript is used and with
              TypeScript most errors are catched before production. React
              together with Next JS allow to create truly reactive components
              and create a complete website.
            </p>
            <p>
              This website and all the subpages were made using{" "}
              <span className="underline decoration-blue-400 decoration-2 font-bold">
                React, Next, TypeScript and Tailwind
              </span>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 my-3 bg-dark-red-main-2 h-fit px-3 pt-2 pb-4 rounded-md font-kalam md:mx-8">
        <h1 className="text-2xl pt-3 pb-1">Programming languages</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          <div className="flex flex-col gap-3">
            <Rating skill="Typescript & Javascript" rating={4} />
            <Rating skill="Python" rating={4.5} />
            <Rating skill="Rust" rating={3} />
            <Rating skill="Julia" rating={2} />
            <Rating skill="Java" rating={1} />
          </div>
          <div className="text-lg text-justify mt-4 sm:text-xl md:text-2xl font-open-sans pb-4">
            <p className="">
              I&apos;ve wrote some code in these languages. Check out my 👉
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/YolCruz"
                className="relative underline decoration-red-500 decoration-2 underline-offset-1 text-blue-400 visited:text-purple-400 hover:text-blue-500 active:-top-1"
              >
                GitHub profile
              </a>
              . I am currently working in 2021&apos;s Advent of code challenges,
              using the language Rust and I plan in creating a webpage
              displaying the solutions interactively
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
