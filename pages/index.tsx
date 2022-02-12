import Head from "next/head";
import MainPage from "components/main/main";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yoltic Cruz</title>
        <meta
          name="description"
          content="Personal website of Yoltic Cruz Tello"
        />
      </Head>
      <MainPage />
    </>
  );
};

export default Home;
