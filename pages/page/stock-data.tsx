import { getData } from "../api/currency-exchange"
import axios, {AxiosResponse} from "axios"
import React, { useState } from "react"



export default function Stocks() {
  const [info, setInfo] = useState({})
  const [timeSeries, setTimeSeries] = useState({})

  const useData = () => {
    const data = getData()
  }
  return (
    <div>
      <p>Hello world!</p>
      <button onClick={useData}>
        Test API
      </button>
      <h1>Meta Data:</h1>
      <p>{JSON.stringify(info)}</p>
      <h2>Time series:</h2>
      <p>{JSON.stringify(timeSeries)}</p>
    </div>
  )
}