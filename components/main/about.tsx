import Image from "next/image";
import animations from "styles/animations.module.scss";
import styles from "styles/main.module.scss";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [anim, setAnim] = useState("");
  const [ref, inView, entry] = useInView({
    threshold: 0.3,
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
      className={`min-h-fit flex flex-col bg-green-700 bg-opacity-90 opacity-0 rounded-b-2xl ${animations.durations} ${anim} pb-4 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:mx-auto md:mb-4`}
    >
      <h1 className="bg-dark-green-main-1 font-kalam text-3xl pl-2 py-2 sticky top-0  sm:text-4xl md:text-5xl">
        About
      </h1>
      <div className="grid grid-cols-1 justify-items-center gap-3 my-3 bg-dark-green-main-2 z-10 h-fit px-3 py-6 rounded-md font-kalam md:grid-cols-2 md:px-10">
        <div className="self-center">
          <Image src="/Me_Avatar.jpg" width={200} height={200} alt="How the developer looks" />
        </div>

        <div className="flex flex-col gap-2 font-open-sans text-lg text-justify sm:text-xl md:text-2xl">
          <p>
            Hi! I&apos;m Yoltic. I have 23 years old and I&apos;m from Puebla
            City, México.
          </p>
          <p>
            I love solving hard problems using computer algorithms. Specially
            the ones encountered in Advent of Code.
          </p>
          <p>
            I started coding since my 16 years old, doing some basic scripts,
            mainly to solve math equations.
          </p>
          <p>
            I have a degree in Physics, but my real passion is in computer
            science.
          </p>
        </div>
      </div>
    </section>
  );
}
