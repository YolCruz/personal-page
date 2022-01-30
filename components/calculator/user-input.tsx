import styles from "styles/websites/calculator.module.scss";
import React from "react";

interface Props {
  error: string;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleKey: (e: React.KeyboardEvent) => void;
}

export default function UserInput({
  error,
  userInput,
  setUserInput,
  handleKey,
}: Props) {
  return (
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
  );
}
