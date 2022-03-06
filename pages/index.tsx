import Head from "next/head";
import MainPage from "components/main/main";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yoltic Cruz</title>
        <meta
          name="description"
          content="Personal website of Yoltic Cruz Tello"
        />
        <meta property="og:title" content="Yoltic website" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Main_1_desktop.png" />
        <meta property="og:url" content="https://www.yolcruz.com/" />
      </Head>
      <MainPage />
    </>
  );
};

export default Home;
