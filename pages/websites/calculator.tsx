import { Website } from "components/layouts";
import React, { useState } from "react";
import { parser } from "mathjs";
import styles from "styles/websites/calculator.module.scss";

interface History {
  historyInput: string;
  historyValue: string;
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
const parserUser = parser();

export default function Calculator() {
  const [history, setHistory] = useState([] as History[]);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");

  const getResult = () => {
    const trimmed = userInput.replace(/\s+/g, "");
    try {
      if (/=/g.test(userInput)) {
        const sym = trimmed.substring(0, trimmed.indexOf("="));
        parserUser.evaluate(trimmed);
        const entry: History = {
          historyInput: trimmed,
          historyValue: parserUser.get(sym),
        };
        setHistory([entry, ...history]);
        setUserInput(sym);
      } else {
        const val: string = parserUser.evaluate(trimmed);
        const entry: History = {
          historyInput: userInput,
          historyValue: val.length > 8 ? val.substring(0, 8) + "..." : val,
        };
        setHistory([entry, ...history]);
        setUserInput(val);
      }
    } catch (e: unknown) {
      if (e instanceof SyntaxError) {
        setError("Invalid expression");
      } else if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Unknown error");
      }
    }
  };

  const ac = () => {
    setUserInput("");
  };

  const del = () => {
    setUserInput((prev) => prev.substring(0, prev.length - 1));
  };

  const handleKey = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        getResult();
        break;

      default:
        break;
    }
  };

  return (
    <Website
      title="Calculator"
      description="Write a math expression and see its result"
    >
      <div
        className={`w-screen max-w-full min-h-screen max-h-screen pt-16 bg-violet-900 px-1 shadow-2xl ${styles.container} sm:px-20 sm:pt-20 sm:pb-6 md:px-32 md:pt-24 md:pb-10 lg:px-40 xl:px-60`}
      >
        <div
          className={`rounded-md font-roboto-mono bg-dark-purple-3 text-white flex flex-col-reverse overflow-y-auto overscroll-contain gap-1 max-h-full ${styles.historial}`}
        >
          {history.map((entry) => {
            return (
              <div
                key={`${entry.historyInput}__${entry.historyValue}`}
                className={`flex justify-between mt-1 overflow-x-auto px-2 ${styles.operation}`}
              >
                <p className="text-lg overflow-x-auto">{entry.historyInput}</p>
                <p className="text-lg overflow-x-auto">{entry.historyValue}</p>
              </div>
            );
          })}
        </div>
        <div
          className={`bg-violet-200 rounded-md font-roboto-mono ${styles.user_input} flex flex-col justify-between`}
        >
          <input
            type="text"
            value={userInput}
            className="bg-violet-200 text-right w-full px-3 py-1 text-2xl rounded-md active:outline-none focus:outline-none"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserInput(e.target.value)
            }
            onKeyDown={handleKey}
            maxLength={20}
          />
          <p className="bg-violet-200 text-right break-words px-1 py-1 text-xl h-fit rounded-md">
            {error}
          </p>
        </div>
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
      </div>
    </Website>
  );
}
