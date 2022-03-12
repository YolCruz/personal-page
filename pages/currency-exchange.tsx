import React from "react"
import { Provider } from "react-redux";
import { Website } from "components/layouts";
import { store } from "components/currency-exchange/store/store";
import Container from "components/currency-exchange/container";

export default function CurrencyExchange() {
  return (
    <Website title="Currency Exchange">
      <Provider store={store}>
        <Container />
      </Provider>
    </Website>
  )
}