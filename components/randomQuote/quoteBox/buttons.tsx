import React from "react";
import { BsTwitter } from "react-icons/bs";
import { useQuoteSelector, useQuoteDispatch } from "../store/hooks";
import { useGetQuoteQuery } from "../store/quoteAPI";
import { newColor } from "../store/quoteSlice";

export default function Buttons() {
  const { data, refetch, isLoading } = useGetQuoteQuery();

  const dispatch = useQuoteDispatch();
  const color = useQuoteSelector((state) => state.quote.color);
  return (
    <div className="flex items-center justify-between mt-3 gap-4">
      <a
        className={`p-3`}
        style={{
          transition: "background-color 0.5s ease",
          backgroundColor: color,
        }}
        title="Tweet this quote!"
        target="_blank"
        rel="noreferrer noopener"
        href={
          isLoading
            ? ""
            : `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
                `"${data.content}" ${data.originator.name}`
              )}`
        }
      >
        <BsTwitter size="1.75rem" color="white" />
      </a>
      <button
        className={`text-white p-3 text-center inline-block text-lg hover:opacity-70`}
        style={{
          transition: "background-color 0.5s ease",
          backgroundColor: color,
        }}
        onClick={() => {
          dispatch(newColor());
          refetch();
        }}
      >
        New Quote
      </button>
    </div>
  );
}
