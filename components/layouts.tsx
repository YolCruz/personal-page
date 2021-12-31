import Link from "next/link";
import Head from "next/head";
import Header from "components/header/header";
import React, { useEffect, useState } from "react";
import { updateDocumentClass } from "utils/darkTheme";

export function LayoutApps({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  const [theme, setTheme] = useState("")
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme) {
      setTheme(theme)
    }
    updateDocumentClass();
  }, [theme]);
  return (
    <div className="min-h-screen text-black dark:text-white dark:bg-nice-grey duration-300 ease-out">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/YC.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
      <Header />
      <main className="pt-20">{children}</main>
      <footer className="pt-16 text-2xl">
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </footer>
    </div>
  );
}

export function LayoutCards({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-2 mt-4 p-4 rounded-lg bg-gradient-radial from-white dark:from-black-inner to-white dark:to-black-outer duration-300 ease-out flex flex-col items-center gap-4 sm:flex-row">
      {children}
    </div>
  );
}

export function LayoutCardsImage({ children }: { children: React.ReactNode }) {
  return (
    <div className="aspect-square w-32 bg-primary dark:bg-secondary rounded-lg opacity-75 self-center justify-self-center duration-500 ease-out">
      {children}
    </div>
  );
}

export function LayoutCardsContent({
  url,
  title,
  desc
}: {
  url: string;
  title: string;
  desc: string
}) {
  return (
    <div>
      <Link href={url}>
        <a className="relative text-2xl text-blue-500 hover:text-blue-400 active:bottom-1 underline underline-offset-2 decoration-blue-300">
          {title}
        </a>
      </Link>
      <p className="text-lg">{desc}</p>
    </div>
  );
}