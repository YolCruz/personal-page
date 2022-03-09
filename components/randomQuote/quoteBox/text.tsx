import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useQuoteSelector } from "../store/hooks";
import { useGetQuoteQuery } from "../store/quoteAPI";

export default function Text() {
  const color = useQuoteSelector((state) => state.quote.color);
  const { data, isLoading } = useGetQuoteQuery();
  return (
    <div className="flex flex-col gap-2">
      <div
        className="grid gap-x-2 place-items-start"
        style={{
          gridTemplateColumns: "1rem 5fr",
        }}
      >
        <FaQuoteLeft
          size="1rem"
          className="block"
          style={{
            transition: "color 0.5s ease",
            color,
          }}
        />
        {isLoading ? (
          <h1
            style={{
              color,
            }}
          >
            Loading...
          </h1>
        ) : (
          <h1
            className={`inline ${
              data.content.length > 300
                ? "text-base"
                : data.content.length > 150
                ? "text-lg"
                : "text-xl"
            } text-justify font-medium my-0`}
            style={{
              transition: "color 0.5s ease",
              color,
            }}
          >
            {data.content}
          </h1>
        )}
      </div>

      {isLoading ? (
        <h2></h2>
      ) : (
        <h2
          className="text-right text-lg"
          style={{
            color,
          }}
        >
          {data.originator.name}
        </h2>
      )}
    </div>
  );
}
