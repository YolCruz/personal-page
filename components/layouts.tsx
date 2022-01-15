import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { updateDocumentClass } from "lib/darkTheme";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Header from "components/main/header";
import Date from "./date";

export function Website({
  children,
  title,
  description,
  main
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  main: boolean
}) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
    updateDocumentClass();
  }, [theme]);
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/YC.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Numans&family=Work+Sans&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content={description} />
      </Head>
      {main ? <Header enableAnimations={false} /> : <></>}
      <>{children}</>
      <div className="pt-6 pl-5 text-2xl bg-dark-red-main-2 text-white">
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </>
  );
}

export function Rating({ skill, rating }: { skill: string; rating: number }) {
  const ratingStars = () => {
    let stars: JSX.Element[] = [];
    for (let i = 1; i <= 5; i++) {
      if (rating - i >= 0) {
        stars.push(
          <Icon
            icon="bi:star-fill"
            color="#faff00"
            width="25"
            height="25"
            key={`${skill}${i}`}
          />
        );
      } else if (rating - i === -0.5) {
        stars.push(
          <Icon
            icon="bi:star-half"
            color="#faff00"
            width="25"
            height="25"
            key={`${skill}${i}`}
          />
        );
      } else {
        stars.push(
          <Icon
            icon="bi:star"
            color="#faff00"
            width="25"
            height="25"
            key={`${skill}${i}`}
          />
        );
      }
    }
    return stars;
  };
  return (
    <div className="flex bg-red-main-2 bg-opacity-40 items-center py-2 px-3 justify-between rounded-md">
      <p className="text-lg">{skill}</p>
      <div className="flex gap-3">{ratingStars()}</div>
    </div>
  );
}

// export function LayoutCardsImage({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="aspect-square w-64 sm:w-72 bg-primary dark:bg-secondary rounded-lg opacity-100 self-center justify-self-center hidden sm:grid place-content-center">
//       {children}
//     </div>
//   );
// }

// export function LayoutCardsContent({
//   url,
//   title,
//   desc,
//   date,
// }: {
//   url: string;
//   title: string;
//   desc: string;
//   date: string;
// }) {
//   return (
//     <div className="font-open-sans">
//       <Link href={url}>
//         <a className="relative text-2xl text-blue-500 hover:text-blue-400 active:bottom-1 underline underline-offset-2 decoration-blue-300">
//           {title}
//         </a>
//       </Link>
//       <p className="text-lg">{desc}</p>
//       <p className="text-right text-md">
//         Date finished: <span className="text-red-500 font-bold">{date}</span>
//       </p>
//     </div>
//   );
// }
