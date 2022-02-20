import { Website } from "components/layouts";
import UserInput from "components/calculator/user-input";
import Buttons from "components/calculator/buttons";
import Historial from "components/calculator/history";
import React, { useState } from "react";
import { parser } from "mathjs";
import styles from "styles/websites/calculator.module.scss";

export interface History {
  historyInput: string;
  historyValue: string;
}
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
        <Historial history={history} />
        <UserInput
          error={error}
          userInput={userInput}
          setUserInput={setUserInput}
          handleKey={handleKey}
        />
        <Buttons
          getResult={getResult}
          ac={ac}
          del={del}
          setUserInput={setUserInput}
        />
      </div>
    </Website>
  );
}
