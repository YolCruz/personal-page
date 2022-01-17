import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Header from "./header";
import WelcomeAnimation from "./welcome_animation";
import WebDev from "./web_dev";
import Blog from "./blog";
import styles from "styles/main.module.scss";
import Skills from "./skills";
import About from "./about";
import { useInView } from "react-intersection-observer";
import animations from "styles/animations.module.scss";

interface Props {
  websites: {
    date: string;
    title: string;
    id: string;
    description: string;
    descriptionLong: string;
    picture: string;
    alt: string
  }[];
  posts: {
    title: string;
    date: string;
    summary: string;
    id: string;
  }[]
}

export default function MainPage({websites, posts}: Props) {

  return (
    <>
      {/* <WelcomeAnimation /> */}
      <Header />
      <main
        className={`max-h-screen overflow-y-auto overflow-x-hidden bg-dark-blue-main-2 w-screen max-w-full flex flex-col gap-6 text-white overscroll-contain pt-16 md:px-16 md:gap-4`}
      >
          <h1
            className={`font-dancing-script text-center text-4.5xl my-0 pt-4  pb-4 md:text-6xl`}
          >
            Yoltic Cruz Tello
          </h1>
          <WebDev websites={websites}/>
          <Blog posts={posts} />
          <Skills />
          <About />
      </main>
    </>
  );
}
