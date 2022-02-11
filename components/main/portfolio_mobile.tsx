import { AppDescriptionMobile } from "components/layouts";
import { useInView } from "react-intersection-observer";
import animations from "styles/animations.module.scss"
import {useState, useEffect} from "react"

export default function PortfolioMobile() {
  const [anim, setAnim] = useState("");
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      setAnim(animations.move_card)
    }
  }, [inView])
  return (
    <section  className={`md:hidden mt-10 min-h-screen opacity-0 ${anim}`}>
      <h1 ref={ref} className="font-rubik text-white text-center text-2xl">
        LEARNING PROJECTS I&apos;VE MADE
      </h1>
      <div className="flex flex-col mt-4">
        <AppDescriptionMobile
          name="Pomodoro App"
          description="Work on your projects using the Pomodoro technique, with 25 minutes for work and 5 minutes for rest."
          conceptsUsed={["React", "Typescript", "Sass", "Tailwind"]}
          image="/pomodoro_mobile_finished.png"
          w={432}
          h={833}
          link="/websites/pomodoro"
          alt="How the pomodoro app looks"
        />
      </div>
    </section>
  );
}
