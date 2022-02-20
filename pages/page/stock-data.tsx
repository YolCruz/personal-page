import { getData } from "../api/currency-exchange"

export default function Stocks() {
  return (
    <div>
      <p>Hello world!</p>
      <button onClick={getData}>
        Test API
      </button>
    </div>
  )
}