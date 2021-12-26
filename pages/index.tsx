import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/header/header";
import Main from "components/main/main";
import Apps from "components/sections/Apps";
import { updateDocumentClass } from "utils/darkTheme";
import { useEffect } from "react";

const Home: NextPage = () => {
  // updateDocumentClass()
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
      <div className="bg-mountain bg-no-repeat bg-cover bg-center h-screen snap-start">
        <Header />
        <Main />
      </div>
      <section className="h-screen snap-start bg-gradient-to-b from-sky-200 to-cyan-500 dark:bg-sky-700 duration-300 ease-out">
        <Apps />
      </section>
    </div>
  );
};

export default Home;
