import { Website } from "components/layouts";
import Date from "components/date";
import { getAllPostsIds, getPostsData } from "lib/blog";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";

interface Props {
  postData: {
    title: string;
    date: string;
    description: string;
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

const Websites: NextPage<Props> = ({ postData }) => {
  return (
    <Website title={postData.title} description={postData.description} main>
      <article className="w-screen h-screen pt-16 bg-dark-blue text-white flex flex-col gap-10">
        <h1 className="text-3xl">{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div
          className="text-justify text-xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Website>
  );
};

export default Websites;
