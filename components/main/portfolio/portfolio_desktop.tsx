import { AppDescriptionDesktop } from "components/layouts"
import styles from "styles/portfolio.module.scss"
import React from "react";

export default function Desktop() {
  return (
    <div className={`hidden md:grid md:my-8 ${styles.desktop} md:gap-x-16 md:gap-y-16`}>
      <AppDescriptionDesktop
          name="Pomodoro App"
          description="Work on your projects using the Pomodoro technique, with 25 minutes for work and 5 minutes for rest."
          conceptsUsed={["React", "Typescript", "Sass", "Tailwind"]}
          image="/pomodoro_desktop.png"
          w={1260}
          h={737}
          link="/page/pomodoro"
          alt="How the pomodoro app looks"
        />
        <AppDescriptionDesktop
          name="Calculator"
          description="Working calculator with buttons to add input and fully text input support. Handles calculation errors and shows historial."
          conceptsUsed={["Vue", "Typescript", "Stylus", "Grid Layout"]}
          image="/calculator_desktop.png"
          w={1260}
          h={737}
          link="/page/calculator"
          alt="How the calculator app looks"
        />
    </div>
  )
}