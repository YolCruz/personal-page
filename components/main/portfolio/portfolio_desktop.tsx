import { AppDescriptionDesktop } from "components/layouts"
import styles from "styles/portfolio.module.scss"
import React from "react";

export default function Desktop() {
  return (
    <div className={`hidden md:grid md:my-8 ${styles.desktop} md:gap-x-16 md:gap-y-16`}>
      <AppDescriptionDesktop
          name="Pomodoro with task manager"
          description="Pomodoro timer with 3 different levels to choose from and a task manager to keep track of your archivements"
          conceptsUsed={["React", "Redux", "Typescript", "Sass", "Tailwind", "Figma"]}
          image="/pomodoro_desktop.png"
          w={1260}
          h={737}
          link="/pomodoro"
          alt="How the pomodoro app looks"
        />
        <AppDescriptionDesktop
          name="Calculator"
          description="Working calculator with buttons to add input and fully text input support. Handles calculation errors and shows historial."
          conceptsUsed={["Vue", "Typescript", "Stylus", "Grid Layout"]}
          image="/calculator_desktop.png"
          w={1260}
          h={737}
          link="/calculator"
          alt="How the calculator app looks"
        />
    </div>
  )
}