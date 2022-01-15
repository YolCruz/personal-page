import { getSortedWebsitesData } from "lib/websites";
import { Website } from "components/layouts";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import Link from "next/link";

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
}

export const getStaticProps: GetStaticProps = async () => {
  const allWebsitesData = getSortedWebsitesData();
  return {
    props: {
      allWebsitesData,
    },
  };
};

const Websites: NextPage<Props> = ({ allWebsitesData }) => {
  return (
    <Website
      title="Websites"
      description="In this page you will find all of the websites I've created"
      main
    >
      <main className="w-screen min-h-screen max-w-full bg-blue-main-1 pt-16 text-white">
        <h1 className="text-3xl pt-2 px-2">Websites</h1>
        <ul className="grid grid-cols-1 justify-items-stretch gap-10 py-6 sm:px-10 md:grid-cols-2 xl:grid-cols-3">
          {allWebsitesData.map(
            ({
              date,
              title,
              id,
              description,
              descriptionLong,
              picture,
              alt,
            }) => {
              const dateParsed = parseISO(date);
              return (
                <li
                  key={id}
                  className="bg-dark-blue-main-1 px-4 py-6 flex flex-col gap-4 rounded-2xl sm:px-6"
                >
                  <div className="self-center">
                    <Image src={picture} width={200} height={200} alt={alt} />
                  </div>
                  <div>
                    <h1 className="relative text-2xl text-blue-400 hover:text-blue-500 active:-top-1 md:text-3xl">
                      <Link href={`/websites/${title}`}>
                        <a>{title}</a>
                      </Link>
                    </h1>
                    <time dateTime={date}>
                      <span className="text-red-400 text-lg md:text-xl">
                        {format(dateParsed, "LLLL d, yyyy")}
                      </span>
                    </time>
                    <p className="text-lg text-justify md:text-xl">
                      {descriptionLong}
                    </p>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </main>
    </Website>
  );
};

export default Websites;
