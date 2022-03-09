import React, { useEffect } from "react";
import Buttons from "./quoteBox/buttons";
import Text from "./quoteBox/text";
import { useQuoteDispatch } from "components/randomQuote/store/hooks";
import { newColor } from "components/randomQuote/store/quoteSlice";

export default function QuoteBox() {
  const dispatch = useQuoteDispatch();

  useEffect(() => {
    dispatch(newColor());
  }, [dispatch]);

  return (
    <div
      className="w-fit h-fit max-h-full py-12 px-10 bg-white border border-black rounded-3xl mx-3"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <Text />
      <Buttons />
    </div>
  );
}
