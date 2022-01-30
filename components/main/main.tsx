import WebDev from "./web_dev";
import Blog from "./blog";
import Skills from "./skills";
import About from "./about";

interface Props {
  websites: {
    date: string;
    title: string;
    id: string;
    description: string;
    descriptionLong: string;
    picture: string;
    alt: string
  }[];
  posts: {
    title: string;
    date: string;
    summary: string;
    id: string;
  }[]
}

export default function MainPage({websites, posts}: Props) {

  return (
    <>
      {/* <WelcomeAnimation /> */}
      <main
        className={`max-h-screen overflow-y-auto overflow-x-hidden bg-white w-screen max-w-full flex flex-col gap-6 text-white overscroll-contain pt-16 md:px-16 md:gap-4`}
      >
          <WebDev websites={websites}/>
          <Blog posts={posts} />
          <Skills />
          <About />
      </main>
    </>
  );
}
