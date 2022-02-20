import About from "./about";
import styles from "styles/main.module.scss";
import Welcome from "./welcome";
import Portfolio from "./portfolio/portfolio";
import Header from "./header";
import Contact from "./contact/contact";
import React from "react";

export default function MainPage() {
  return (
    <>
      <div
        className={`fixed inset-0 -z-50 ${styles.backImage} bg-blue-1 bg-no-repeat bg-cover bg-right-bottom overflow-hidden`}
      />
      <div className="w-screen h-screen relative max-h-screen max-w-full overflow-y-auto scroll-smooth overscroll-contain">
        <Header />
        <Welcome />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
