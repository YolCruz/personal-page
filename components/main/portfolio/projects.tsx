import styles from "styles/portfolio.module.scss";
import { AppDescription } from "components/layouts";
import React from "react";
import pomodoroMobile from "public/pomodoro_mobile.png";
import pomodoroDesktop from "public/pomodoro_desktop.png";
import calculatorMobile from "public/calculator_mobile.png";
import calculatorDesktop from "public/calculator_desktop.png";
import quoteMobile from "public/random_quote_mobile.png"
import quoteDesktop from "public/random_quote_desktop.png"

export default function Projects() {
  return (
    <div
      className={`flex flex-col py-4 gap-10 md:grid md:my-8 md:gap-x-16 md:gap-y-16 md:items-end ${styles.desktop}`}
    >
      <AppDescription
        name="Random quote generator"
        description="Simple quote generator that uses an external Quotes API"
        conceptsUsed={[
          "React",
          "Redux",
          "REST API",
          "RTK Query",
          "Typescript",
          "Tailwind",
        ]}
        imageMobile={quoteMobile}
        widthMobile={818}
        heightMobile={1594}
        imageDesktop={quoteDesktop}
        widthDesktop={1260}
        heightDesktop={737}
        link="/pomodoro"
        alt="How the quote app looks"
      />
      <AppDescription
        name="Pomodoro with task manager"
        description="Pomodoro timer with 3 different levels to choose from and a task manager to keep track of your achievements"
        conceptsUsed={[
          "React",
          "Redux",
          "Typescript",
          "Sass",
          "Tailwind",
          "Figma",
        ]}
        imageMobile={pomodoroMobile}
        widthMobile={818}
        heightMobile={1594}
        imageDesktop={pomodoroDesktop}
        widthDesktop={1260}
        heightDesktop={737}
        link="/pomodoro"
        alt="How the pomodoro app looks"
      />
      <AppDescription
        name="Calculator"
        description="Working calculator with buttons to add input and fully text input support. Handles calculation errors and shows historial."
        conceptsUsed={["Vue", "Typescript", "Stylus", "Grid Layout"]}
        imageMobile={calculatorMobile}
        widthMobile={818}
        heightMobile={1594}
        imageDesktop={calculatorDesktop}
        widthDesktop={1260}
        heightDesktop={737}
        link="/calculator"
        alt="How the calculator app looks"
      />
    </div>
  );
}
