import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Kalam&family=Lato&family=Literata&family=Numans&family=Open+Sans&family=Pacifico&family=Roboto+Mono&family=Roboto+Slab&family=Rubik&family=Satisfy&family=Work+Sans&family=Yanone+Kaffeesatz&display=swap"
            rel="stylesheet"
          />
          <meta charSet="UTF-8" />
          <link rel="icon" href="/YC.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
