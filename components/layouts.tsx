import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Icon } from "@iconify/react";

export function Website({
  children,
  title,
  description,
  icon,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  icon?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {icon ? (
          <link rel="icon" href={icon} />
        ) : (
          <link rel="icon" href="/YC.svg" />
        )}
        {description ? (
          <meta name="description" content={description} />
        ) : (
          <></>
        )}
      </Head>
      <>{children}</>
      <footer className="py-6 px-5 text-2xl bg-red-900 text-white w-screen max-w-full flex items-center justify-center">
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
