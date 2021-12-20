import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/header";
import Main from "../components/main/main";

const Home: NextPage = () => {
  return (
    <div className="bg-mountain bg-no-repeat bg-cover bg-left-top min-w-fit">
      <Head>
        <title>Yol Cruz website</title>
        <meta
          name="description"
          content="Personal website of Yoltic Cruz Tello"
        />
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
      <Header />
      <Main />
    </div>
  );
};

export default Home;
