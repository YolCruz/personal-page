import { NextPage, GetStaticProps } from "next";
import { getSortedPostsData } from "lib/blog";
import {Website} from "components/layouts"
import { parseISO, format } from "date-fns";
import Link from "next/link"

interface Props {
  allPostsData: {
    title:string;
    date: string;
    summary: string;
    id: string;
  }[]
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Blog: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Website title="Blog" description="My personal blog where I share my experiences and knowledge about coding and web design" main>
      <main className="w-screen min-h-screen max-w-full bg-purple-800 pt-16 text-white">
      <h1 className="text-3xl pt-2 px-2">Blog posts</h1>
      <ul className="grid grid-cols-1 justify-items-stretch gap-10 py-6 sm:px-10 md:grid-cols-2 xl:grid-cols-3">
        {allPostsData.map(
          ({
            title,
            date,
            summary,
            id
          }) => {
            const dateParsed = parseISO(date);
            return (
              <li
                key={id}
                className="bg-dark-purple-main-1 px-4 py-6 flex flex-col gap-4 rounded-2xl sm:px-6"
              >
                    <h1 className="relative text-2xl text-blue-400 hover:text-blue-500 active:-top-1 md:text-3xl">
                      <Link href={`/blog/${id}`}>
                        <a>{title}</a>
                      </Link>
                    </h1>
                    <time dateTime={date}>
                      <span className="text-red-400 text-lg md:text-xl">
                        {format(dateParsed, "LLLL d, yyyy")}
                      </span>
                    </time>
                    <p className="text-lg text-justify md:text-xl">
                      {summary}
                    </p>
              </li>
            )
          }
        )}
      </ul>
      </main>
    </Website>
  )
}

export default Blog