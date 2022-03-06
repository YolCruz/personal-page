import { AppDescriptionMobile } from "components/layouts"
import React from "react";

export default function Mobile() {
  return (
    <div className="md:hidden flex flex-col py-4 gap-10">
        <AppDescriptionMobile
          name="Pomodoro with task manager"
          description="Pomodoro timer with 3 different levels to choose from and a task manager to keep track of your archivements"
          conceptsUsed={["React", "Redux", "Typescript", "Sass", "Tailwind", "Figma"]}
          image="/pomodoro_mobile.png"
          w={432}
          h={833}
          link="/pomodoro"
          alt="How the pomodoro app looks"
        />
        <AppDescriptionMobile
          name="Calculator"
          description="Working calculator with buttons to add input and fully text input support. Handles calculation errors and shows historial."
          conceptsUsed={["Vue", "Typescript", "Stylus", "Grid Layout"]}
          image="/calculator_mobile.png"
          w={818}
          h={1594}
          link="/calculator"
          alt="How the calculator app looks"
        />
      </div>
  )
}