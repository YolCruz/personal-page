import styles from "styles/websites/calculator.module.scss";
import { History } from "pages/page/calculator";

interface Props {
  history: History[];
}

export default function Historial({ history }: Props) {
  return (
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
  );
}
