import { useInView } from "react-intersection-observer";
import animations from "styles/animations.module.scss";
import { useState, useEffect } from "react";
import Mobile from "./portfolio_mobile";
import Desktop from "./portfolio_desktop";

export default function Portfolio() {
  const [anim, setAnim] = useState("");
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setAnim(animations.move_card);
    }
  }, [inView]);
  return (
    <section id="portfolio" className={`mt-10 min-h-screen opacity-0 ${anim}`}>
      <h1 ref={ref} className="font-rubik text-white text-center text-2xl">
        LEARNING PROJECTS I&apos;VE MADE
      </h1>
      <Mobile />
      <Desktop />
    </section>
  );
}
