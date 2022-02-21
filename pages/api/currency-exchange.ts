import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://alpha-vantage.p.rapidapi.com/query",
  params: {
    function: "FX_INTRADAY",
    interval: "5min",
    to_symbol: "USD",
    from_symbol: "EUR",
    datatype: "json",
    outputsize: "compact",
  },
  headers: {
    "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    "x-rapidapi-key": "e28b67830dmsh172352372b74031p1c31a5jsn3364533eef15",
  },
};

export const getData = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
