import Header from "components/main/header";
import Image from "next/image";
import { Website } from "components/layouts";

export default function About() {
  return (
    <Website title="about" description="More info about the developer of this website" main>
      <main className="w-screen min-h-screen max-w-full pt-16 bg-dark-green-main-1 text-white grid grid-cols-1 gap-6 px-6 content-center justify-items-center sm:px-20 md:grid-cols-2 md:px-10">
        <div className="">
          <Image src="/Me_Avatar.jpg" width={200} height={200} alt="How the developer looks" />
        </div>
        <div>
          <p className="font-kalam text-xl text-justify sm:text-3xl">
            Hi! I&apos;m Yoltic. I have 23 years old and I&apos;m from Puebla
            City, México.
          </p>
          <p className="font-kalam text-xl text-justify sm:text-3xl">
            I love solving hard problems using computer algorithms. Specially
            the ones encountered in Advent of Code.
          </p>
          <p className="font-kalam text-xl text-justify sm:text-3xl">
            I started coding since my 16 years old, doing some basic scripts,
            mainly to solve math equations.
          </p>
          <p className="font-kalam text-xl text-justify sm:text-3xl">
            I have a degree in Physics, but my real passion is in computer
            science.
          </p>
        </div>
      </main>
    </Website>
  );
}
