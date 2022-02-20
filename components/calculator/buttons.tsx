import React from "react"
import styles from "styles/websites/calculator.module.scss"

interface Props {
  getResult: () => void;
  ac: () => void;
  del: () => void;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
}

const buttons = [
  { id: "parentheses1", text: "(", fun: "(" },
  { id: "parentheses2", text: ")", fun: ")" },
  { id: "plus", text: "+", fun: "+" },
  { id: "minus", text: "-", fun: "-" },
  { id: "multiplication", text: "*", fun: "*" },
  { id: "division", text: "/", fun: "/" },
  { id: "point", text: ".", fun: "." },
  { id: "power2", text: "x²", fun: "^2" },
  { id: "factorial", text: "x!", fun: "!" },
  { id: "DEL", text: "DEL", fun: "" },
  { id: "AC", text: "AC", fun: "" },
  { id: "sqrt", text: "√x", fun: "sqrt(" },
  { id: "equal", text: "=", fun: "=" },
  { id: "number0", text: "0", fun: "0" },
  { id: "number1", text: "1", fun: "1" },
  { id: "number2", text: "2", fun: "2" },
  { id: "number3", text: "3", fun: "3" },
  { id: "number4", text: "4", fun: "4" },
  { id: "number5", text: "5", fun: "5" },
  { id: "number6", text: "6", fun: "6" },
  { id: "number7", text: "7", fun: "7" },
  { id: "number8", text: "8", fun: "8" },
  { id: "number9", text: "9", fun: "9" },
];

export default function Buttons({getResult, ac, del, setUserInput}: Props) {
  return (
    <div
          className={`${styles.calc_buttons} text-white flex gap-1 font-roboto-mono border rounded-md`}
        >
          {buttons.map((button) => {
            switch (button.text) {
              case "=":
                return (
                  <button
                    style={{
                      gridArea: `${button.id}`,
                    }}
                    key={button.id}
                    className="border text-xl sm:text-2xl md:text-3xl"
                    onClick={getResult}
                  >
                    {button.text}
                  </button>
                );
              case "AC":
                return (
                  <button
                    style={{
                      gridArea: `${button.id}`,
                    }}
                    onClick={ac}
                    key={button.id}
                    className="border text-xl sm:text-2xl md:text-3xl"
                  >
                    {button.text}
                  </button>
                );
              case "DEL":
                return (
                  <button
                    style={{
                      gridArea: `${button.id}`,
                    }}
                    onClick={del}
                    key={button.id}
                    className="border text-xl sm:text-2xl md:text-3xl"
                  >
                    {button.text}
                  </button>
                );
              default:
                return (
                  <button
                    style={{
                      gridArea: `${button.id}`,
                    }}
                    key={button.id}
                    className="border text-xl sm:text-2xl md:text-3xl"
                    onClick={() => setUserInput((prev) => prev + button.fun)}
                  >
                    {button.text}
                  </button>
                );
            }
          })}
        </div>
  )
}