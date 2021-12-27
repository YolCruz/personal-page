import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export interface Props {}

export interface State {
  contactVisible: boolean;
}

class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { contactVisible: false };
  }

  changeContactVisibility = () => {
    if (this.state.contactVisible === false) {
      this.setState({ contactVisible: true });
    } else {
      this.setState({ contactVisible: false });
    }
  };
  render() {
    return (
      <div className="h-screen pt-24 grid auto-cols-auto auto-rows-auto gap-8 lg:grid-cols-2 lg:grid-rows-1">
        <div className="w-11/12 max-w-2xl mx-auto lg:self-center">
          <div className="mb-10 w-40 -rotate-12 aspect-square bg-green-800 flex mx-auto shadow-gray-800 shadow-xl">
            <div className="flex rotate-12 shadow-gray-800 shadow-xl">
              <Image
                src="/Me_Avatar.jpg"
                height={160}
                width={160}
                alt="The developer"
              />
            </div>
          </div>
          <main className="font-numans text-black dark:text-white bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-60 rounded-xl py-5 px-5 flex flex-col duration-300 ease-out">
            <h1 className="text-4xl mb-6">Hi, I&apos;m Yoltic</h1>
            <div className="mb-3">
              <p className="text-2xl">I desing & build websites.</p>
              <p className="text-2xl">
                I like to solve coding problems for fun!
              </p>
            </div>

            <div className="my-3 flex gap-x-2 justify-between">
              <button className="text-white bg-green-900 p-2 rounded-lg text-xl">
                Contact Me
              </button>
              <div className="flex gap-x-2">
                <a
                  href="https://www.instagram.com/yoltic.cruz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-instagram dark:bg-instagram-white bg-no-repeat bg-cover bg-center aspect-square w-14 duration-300 ease-out" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://github.com/YolCruz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-github dark:bg-github-white bg-no-repeat bg-cover bg-center aspect-square w-14 duration-300 ease-out" />
                  <span className="sr-only">Github</span>
                </a>
              </div>
            </div>
          </main>
        </div>
        <div className="mx-auto hidden self-center lg:block">
          <Image
            src="/sunset.svg"
            alt="Mountains and the sky in a sunset"
            width={680}
            height={516}
          />
        </div>
      </div>
    );
  }
}

export default Main;
