import { Website } from "components/layouts";
import Image from "next/image";

export default function TimeTracker() {
  return (
    <Website
      title="Time tracking dashboard"
      icon="/timetracker/favicon-32x32.png"
    >
      <body className="min-h-screen w-screen max-w-full bg-tt-very-dark-blue text-white font-rubik grid grid-cols-1 gap-4 px-4 py-6 content-start">
        <div className="bg-tt-dark-blue rounded-2xl">
          <div className="flex items-center gap-4 bg-tt-blue rounded-2xl py-6 pl-7">
            <div className="border-4 rounded-full flex">
              <Image
                src="/timetracker/image-jeremy.png"
                height={65}
                width={65}
                alt="Jeremy picture"
              />
            </div>
            <div>
              <h1 className="font-light text-tt-pale-blue">Report for</h1>
              <h2 className="text-2xl">Jeremy Robson</h2>
            </div>
          </div>
          <div className="flex justify-center gap-14 py-6">
            <button className="text-lg">Daily</button>
            <button className="text-lg">Weekly</button>
            <button className="text-lg">Monthly</button>
          </div>
        </div>
      </body>
    </Website>
  );
}
