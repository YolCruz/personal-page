import React from "react";
import { Provider } from "react-redux";
import { store } from "components/randomQuote/store/store";
import { Website } from "components/layouts";
import QuoteWrapper from "components/randomQuote/quoteBox/quoteWrapper";

export default function RandomQuote() {
  return (
    <Website title="Random quote">
      <Provider store={store}>
        <QuoteWrapper />
      </Provider>
    </Website>
  );
}
