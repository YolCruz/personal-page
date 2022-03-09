import React from "react";
import QuoteBox from "components/randomQuote/quoteBox";
import { useQuoteSelector } from "../store/hooks";

export default function QuoteWrapper() {
  const color = useQuoteSelector((state) => state.quote.color);
  return (
    <div
      className="w-screen max-w-full h-screen flex flex-col items-center justify-center font-rubik"
      style={{
        backgroundColor: color,
        transition: "background-color 0.5s ease",
      }}
    >
      <QuoteBox />
    </div>
  );
}
