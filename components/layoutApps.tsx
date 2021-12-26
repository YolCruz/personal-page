import Link from "next/link";
import Head from "next/head";
import Header from "components/header/header";

export default function LayoutApps({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string,
  description: string
}) {
  return (
    <div className="min-h-screen text-black dark:text-white dark:bg-nice-grey">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="public/YC.svg" />
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
