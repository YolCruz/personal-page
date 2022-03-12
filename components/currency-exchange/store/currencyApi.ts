import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

interface MetaData {
  [key: string]: string;
}

export interface TimeSeries {
  [date: string]: { [key: string]: string };
}

interface CurrencyResponse {
  [key: string]: MetaData | TimeSeries;
}

export interface QueryParams<T = string> {
  functionApi: T;
  from_symbol: T;
  to_symbol: T;
  datatype: T;
}

// interface QueryProps {
//   baseUrl: string;
//   headers: AxiosRequestConfig["headers"];
// }
// const options = {
//   method: "GET",
//   url: "https://alpha-vantage.p.rapidapi.com/query",
//   params: {
//     function: "FX_WEEKLY",
//     from_symbol: "EUR",
//     to_symbol: "USD",
//     datatype: "json",
//   },
//   headers: {
//     "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
//     "x-rapidapi-key": "e28b67830dmsh172352372b74031p1c31a5jsn3364533eef15",
//   },
// };

// const axiosBaseQuery =
//   (
//     { baseUrl, headers }: QueryProps = {
//       baseUrl: "https://alpha-vantage.p.rapidapi.com",
//       headers: {
//         "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
//         "x-rapidapi-key": "e28b67830dmsh172352372b74031p1c31a5jsn3364533eef15",
//       },
//     }
//   ): BaseQueryFn<
//     {
//       url: string;
//       params: AxiosRequestConfig["params"];
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, params }) => {
//     try {
//       const result: AxiosResponse<CurrencyResponse> = await axios({
//         url: baseUrl + url,
//         headers,
//         params,
//       });
//       return { data: result.data };
//     } catch (axiosError) {
//       const err = axiosError as AxiosError;
//       return {
//         error: { status: err.response?.status, data: err.response?.data },
//       };
//     }
//   };

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  tagTypes: ["Currency"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alpha-vantage.p.rapidapi.com",
    headers: {
      "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
      "x-rapidapi-key": "e28b67830dmsh172352372b74031p1c31a5jsn3364533eef15",
    },
  }),
  endpoints: (build) => ({
    getCurrency: build.query<CurrencyResponse, QueryParams>({
      query: ({ functionApi, from_symbol, to_symbol, datatype }) => ({
        url: `/query?function=${functionApi}&from_symbol=${from_symbol}&to_symbol=${to_symbol}&datatype=${datatype}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCurrencyQuery } = currencyApi;
