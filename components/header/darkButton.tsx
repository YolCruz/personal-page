import { updateDocumentClass } from "utils/darkTheme";

export default function DarkButton() {
  const toggleDark = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    updateDocumentClass();
  };
  return (
    <button
      type="button"
      onClick={toggleDark}
      className="z-50 w-8 aspect-square bg-sun dark:bg-moon"
    >
    </button>
  );
}
