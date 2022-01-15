import animations from "styles/animations.module.scss";

export default function WelcomeAnimation() {
  return (
    <div
      className={`bg-dark-blue-main-1 fixed z-50 inset-0 w-screen max-w-full h-screen text-white flex flex-col justify-center gap-1 ${animations.move_div} ${animations.durations}`}
    >
      <h1
        className={`text-center text-6xl font-kalam ${animations.welcome} ${animations.durations} opacity-0`}
      >
        Welcome
      </h1>
      <p
        className={`text-center text-3xl font-kalam ${animations.text} ${animations.durations} opacity-0`}
      >
        to my personal website
      </p>
    </div>
  );
}
