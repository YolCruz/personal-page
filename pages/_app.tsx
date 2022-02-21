import "styles/globals.scss";
import { AppProps } from "next/app";
import React from "react"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
