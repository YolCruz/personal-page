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
      </Head>
      <MainPage websites={allWebsitesData} posts={allPostsData} />
    </>
  );
};

export default Home;
