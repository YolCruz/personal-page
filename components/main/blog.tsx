import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import animations from "styles/animations.module.scss";
import Link from "next/link";
import { parseISO, format } from "date-fns";

interface Props {
  posts: {
    title: string;
    date: string;
    summary: string;
    id: string;
  }[];
}

export default function Blog({ posts }: Props) {
  const [anim, setAnim] = useState("");
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setAnim(`${animations.move_card}`);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className={`min-h-fit flex flex-col gap-6 bg-purple-main-1 bg-opacity-60 rounded-t-md opacity-0 ${animations.durations} ${anim} md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:mx-auto md:mb-4`}
    >
      <h1 className="font-kalam bg-dark-purple-main-1 pl-2 py-2 text-3xl z-10 sticky top-0 rounded-t-md sm:text-4xl md:text-5xl">
        Blog
      </h1>
      <ul className="grid grid-cols-1 gap-3 m-3 sm:grid-cols-2 md:mx-8 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map(({ title, date, summary, id }) => {
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
                    <span className="text-red-500 text-lg md:text-xl">
                      {format(dateParsed, "LLLL d, yyyy")}
                    </span>
                  </time>
                  <p className="text-lg text-justify md:text-xl">
                    {summary}
                  </p>
            </li>
          )
        })}
      </ul>
      <Link href="/blog">
        <a className="font-kalam text-2xl text-right mx-3 mb-2 md:mx-6 md:mb-4 md:text-3xl">
          View all
        </a>
      </Link>
    </section>
  );
}
