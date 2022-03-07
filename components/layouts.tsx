import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export function Website({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <>{children}</>
    </>
  );
}

export function AppDescription({
  name,
  description,
  conceptsUsed,
  imageMobile,
  widthMobile,
  heightMobile,
  imageDesktop,
  widthDesktop,
  heightDesktop,
  link,
  alt,
}: {
  name: string;
  description: string;
  conceptsUsed: string[];
  imageMobile: StaticImageData;
  widthMobile: number;
  heightMobile: number;
  imageDesktop: StaticImageData;
  widthDesktop: number;
  heightDesktop: number;
  link: string;
  alt: string;
}) {
  return (
    <div>
      <h1 className="text-green-1 font-raleway font-bold text-2xl md:text-3xl text-center">
        {name}
      </h1>
      <div className="w-7/12 max-w-xs mx-auto mt-2 md:hidden">
        <Image
          src={imageMobile}
          width={widthMobile}
          height={heightMobile}
          placeholder="blur"
          alt={alt}
        />
      </div>
      <div className="hidden md:block md:w-9/12 md:mx-auto md:mt-2">
        <Image
          src={imageDesktop}
          width={widthDesktop}
          height={heightDesktop}
          placeholder="blur"
          alt={alt}
        />
      </div>
      <div className="font-raleway flex flex-col items-center gap-3 mx-1">
        <p className="text-white text-center text-xl lg:text-2xl">
          {description}
        </p>
        <p className="text-green-1 text-center text-xl md:text-2xl font-medium">
          {conceptsUsed.map((concept) => {
            if (concept === conceptsUsed[conceptsUsed.length - 1]) {
              return `${concept}`;
            }
            return `${concept} • `;
          })}
        </p>
        <Link href={link}>
          <a className="py-2 px-16 border-2 rounded-full text-white text-xl md:text-2xl border-yellow-1 bg-gradient-to-b from-blue-3">
            Check it out
          </a>
        </Link>
      </div>
    </div>
  );
}
