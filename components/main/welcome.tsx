import { Icon } from "@iconify/react";
import anims from "styles/animations.module.scss";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

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
    <div className="w-screen max-w-full min-h-screen font-audiowide text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center grid grid-cols-1 place-content-center relative ">
      <div ref={ref} className="flex flex-col">
        <p className="-tracking-[.08em] text-white">YOLTIC CRUZ TELLO</p>
        <p className="-tracking-[.01em] text-green-1">WEB DEVELOPER</p>
      </div>
      <div
        className={`absolute h-full w-full max-w-full -z-40 flex justify-center items-end pb-5 opacity-0 ${anims.icon} ${anim}`}
      >
        <Icon
          icon="bi:arrow-down-circle-fill"
          color="white"
          width="60"
          height="60"
        />
      </div>
    </div>
  );
}
