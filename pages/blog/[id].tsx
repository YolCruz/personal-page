import Date from "components/date";
import { getAllPostsIds, getPostsData } from "lib/blog";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import styles from "styles/websites/blog-posts.module.scss";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Header from "components/main/header";
import "highlight.js/styles/pojoaque.css";

interface Props {
  postData: {
    title: string;
    date: string;
    description: string;
    codeLang: string;
    contentHtml: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostsData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default function Websites({ postData }: Props) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/YC.svg" />
        <meta charSet="UTF-8" />
        <meta name="description" content={postData.description} />
      </Head>
      <Header />
      <main className="w-screen min-h-screen max-w-full pt-20 pb-10 bg-blue-800 text-white flex flex-col px-1 sm:px-4 md:px-6 lg:px-10">
        <h1 className="text-3xl mb-4 font-numans">{postData.title}</h1>
        <div className="font-numans">
          <Date dateString={postData.date} />
        </div>
        <div
          className={`text-justify text-xl max-w-full font-open-sans ${styles.main_content}`}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </main>
      <footer className="py-6 px-5 text-2xl bg-dark-red-main-2 text-white w-screen max-w-full flex items-center justify-center">
        <Link href="/">
          <a className="flex gap-4">
            <Icon
              icon="bx:bx-arrow-back"
              color="white"
              width="30"
              height="30"
            />{" "}
            Back home
          </a>
        </Link>
      </footer>
    </>
  );
};
