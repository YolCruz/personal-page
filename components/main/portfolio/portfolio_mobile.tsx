import { AppDescriptionMobile } from "components/layouts"

export default function Mobile() {
  return (
    <div className="md:hidden flex flex-col py-4 gap-10">
        <AppDescriptionMobile
          name="Pomodoro App"
          description="Work on your projects using the Pomodoro technique, with 25 minutes for work and 5 minutes for rest."
          conceptsUsed={["React", "Typescript", "Sass", "Tailwind"]}
          image="/pomodoro_mobile_finished.png"
          w={432}
          h={833}
          link="/page/pomodoro"
          alt="How the pomodoro app looks"
        />
        <AppDescriptionMobile
          name="Calculator"
          description="Working calculator with buttons to add input and fully text input support. Handles calculation errors and shows historial."
          conceptsUsed={["Vue", "Typescript", "Stylus", "Grid Layout"]}
          image="/calculator_mobile.png"
          w={818}
          h={1594}
          link="/page/calculator"
          alt="How the calculator app looks"
        />
      </div>
  )
}