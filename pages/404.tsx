import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="description" content="The page was not found" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-screen min-h-screen max-w-full flex flex-col  justify-center bg-dark-blue-main-1 px-10 gap-4">
        <h1 className="font-open-sans text-white text-5xl font-bold text-center py-2 border-b">
          Error 404
        </h1>
        <p className="font-open-sans text-2xl text-white">Page not found</p>
        <p className="relative font-open-sans text-2xl text-blue-400 hover:text-blue-500 active:-top-1">
          <Link href="/">
            <a>Go to home</a>
          </Link>
        </p>
      </div>
    </>
  );
}
