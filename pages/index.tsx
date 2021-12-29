import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/header/header";
import Main from "components/main/main";
import Apps from "components/sections/Apps";
import { updateDocumentClass } from "utils/darkTheme";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  //TODO: Add a state or something that stores the current theme of the page. Then update that state when changing the page theme, and reference it to the useEffect hook so it only triggers a render when the theme has changed
  useEffect(() => {
    updateDocumentClass();
  });
  return (
    <div className="snap-y snap-mandatory max-h-screen overflow-y-auto">
      <Head>
        <title>Yol Cruz website</title>
        <meta
          name="description"
          content="Personal website of Yoltic Cruz Tello"
        />
        <link rel="icon" href="/YC.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Numans&family=Work+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-mountain bg-no-repeat bg-cover bg-center snap-start">
        <Header />
        <Main />
      </div>
      <section className="h-screen snap-start bg-third dark:bg-primary duration-300 ease-out">
        <Apps />
      </section>
    </div>
  );
};

export default Home;
