import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/header/header";
import Main from "components/main/main";
import Apps from "components/sections/Apps";
import { updateDocumentClass } from "utils/darkTheme";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
    updateDocumentClass();
  }, [theme]);
  return (
    <div className="snap-y snap-mandatory max-h-screen overflow-y-auto">
      <Head>
        <title>Yol Cruz website</title>
        <meta
          name="description"
          content="Personal website of Yoltic Cruz Tello"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/YC.svg" />
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
