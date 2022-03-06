import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();

export default class MyDocument extends Document {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html dir="ltr" lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=Open+Sans&family=Raleway:wght@400;500;600;700&family=Roboto+Mono&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/x-icon" href="/YC.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
