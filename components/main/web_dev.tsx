import Image from "next/image";
import { parseISO, format } from "date-fns";
import Link from "next/link";

interface Props {
  websites: {
    date: string;
    title: string;
    id: string;
    description: string;
    descriptionLong: string;
    picture: string;
    alt: string;
  }[];
}

export default function WebDev({ websites }: Props) {
  return (
    <section
      id="projects"
      className={`min-h-fit flex flex-col gap-6 bg-blue-700 bg-opacity-90 rounded-b-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl md:mx-auto md:mb-4`}
    >
      <h1 className="font-kalam bg-black-back-2 pl-2 py-2 text-3xl sticky top-0 z-10 sm:text-4xl md:text-5xl">
        Web developer
      </h1>
      <ul className="grid grid-cols-1 gap-3 mx-3 sm:grid-cols-2 md:mx-8 lg:grid-cols-3 xl:grid-cols-4">
        {websites.map(
          ({ id, title, date, description, descriptionLong, picture, alt }) => {
            const dateParsed = parseISO(date);
            return (
              <li
                key={id}
                className="project-tile bg-dark-blue-main-1 px-4 py-6 flex flex-col gap-4 rounded-2xl sm:px-6"
              >
                <div className="self-center hidden md:block">
                  <Image src={picture} width={200} height={200} alt={alt} />
                </div>
                <div>
                  <h1 className="relative text-2xl text-blue-400 hover:text-blue-500 active:-top-1 md:text-3xl">
                    <Link href={`/websites/${id}`}>
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
      <Link href="/websites">
        <a className="font-kalam text-2xl text-right mx-3 mb-2 md:mx-6 md:mb-4 md:text-3xl">
          View all
        </a>
      </Link>
    </section>
  );
}
