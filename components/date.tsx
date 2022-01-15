import { parseISO, format } from "date-fns";

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      <span className="text-lg sm:text-xl text-red-400">
        {format(date, "LLLL d, yyyy")}
      </span>
    </time>
  );
}
