import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Originator {
  id: number;
  name: string;
  url: string;
}

interface QuoteResponse {
  id: number;
  language_code: string;
  content: string;
  url: string;
  originator: Originator;
  tags: string[];
}

export const quoteApi = createApi({
  reducerPath: "quoteApi",
  tagTypes: ["Quote"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://quotes15.p.rapidapi.com/quotes/",
  }),
  endpoints: (build) => ({
    getQuote: build.query<QuoteResponse, void>({
      query: () => ({
        url: "random/",
        method: "GET",
        headers: {
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
          "x-rapidapi-key":
            "e28b67830dmsh172352372b74031p1c31a5jsn3364533eef15",
        },
      }),
    }),
  }),
});

export const { useGetQuoteQuery } = quoteApi;
