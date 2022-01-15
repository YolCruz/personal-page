import Head from "next/head";
import MainPage from "components/main/main";
import { getSortedWebsitesData } from "lib/websites";
import { getSortedPostsData } from "lib/blog";
import { NextPage, GetStaticProps } from "next";

interface Props {
  allWebsitesData: {
    date: string;
    title: string;
    id: string;
    description: string;
    descriptionLong: string;
    picture: string;
    alt: string;
  }[];
  allPostsData: {
    title: string;
    date: string;
    summary: string;
    id: string;
  }[];
}

export const getStaticProps: GetStaticProps = async () => {
  const allWebsitesData = getSortedWebsitesData();
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allWebsitesData,
      allPostsData,
    },
  };
};

const Home: NextPage<Props> = ({ allWebsitesData, allPostsData }) => {
  return (
    <>
      <Head>
        <title>Yoltic Cruz</title>
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
      <MainPage websites={allWebsitesData} posts={allPostsData} />
    </>
  );
};

export default Home;
