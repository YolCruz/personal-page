import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import styles from "styles/layouts.module.scss";

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

export function AppDescriptionMobile({
  name,
  description,
  conceptsUsed,
  image,
  w,
  h,
  link,
  alt,
}: {
  name: string;
  description: string;
  conceptsUsed: string[];
  image: string;
  w: number;
  h: number;
  link: string;
  alt: string;
}) {
  return (
    <div>
      <h1 className="text-green-1 font-raleway font-bold text-2xl text-center">
        {name}
      </h1>
      <div className="w-7/12 max-w-xs mx-auto mt-2">
        <Image src={image} width={w} height={h} alt={alt} />
      </div>
      <div className="font-raleway flex flex-col items-center gap-3 mx-1">
        <p className="text-white text-center text-lg">{description}</p>
        <p className="text-green-1 text-center text-lg font-medium">
          {conceptsUsed.map((el) => {
            return <>{el} • </>;
          })}
        </p>
        <Link href={link}>
          <a className="py-2 px-16 border-2 rounded-full text-white text-lg border-yellow-1 bg-gradient-to-b from-blue-3">
            Check it out
          </a>
        </Link>
      </div>
    </div>
  );
}
