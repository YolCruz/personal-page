import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react"

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
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=Open+Sans&family=Raleway:wght@400;500;600;700&family=Roboto+Mono&family=Rubik:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/x-icon" href="/YC.svg" />
          <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
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
