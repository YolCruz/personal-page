import * as React from "react";

class Main extends React.Component {
  render() {
    return (
      <div id="main-content" className="">
        <div id="hero" className="w-11/12 max-w-2xl mx-auto">
          <div id="hero-avatar" className="mb-10 flex justify-center">
            <div className="w-52 -rotate-6 aspect-square bg-green-800 flex items-center justify-center shadow-slate-700 shadow-xl">
              <img
                src="Me_Avatar.jpg"
                className="aspect-square w-52 shadow-slate-700 shadow-xl rotate-6"
                alt="The developer"
              />
            </div>
          </div>
          <main
            id="hero-description"
            className="font-numans text-blue-50 bg-black bg-opacity-60 rounded-xl py-5 px-10 flex flex-col gap-6"
          >
            <h1 className="text-5xl">Hi, I'm Yoltic</h1>
            <p className="text-2xl">
              I desing & build websites. I like to solve coding problems for fun
            </p>
            <div id="hero-contact" className="my-3 flex gap-x-2">
              <button className="bg-green-900 px-6 py-3 rounded-lg text-2xl">
                Contact Me
              </button>
              <div className="flex gap-x-16">
                <div className="">
                  <a
                    href="https://www.instagram.com/yoltic.cruz/"
                    target="_blank"
                    className="absolute w-14 aspect-square instagram"
                  >
                    <span className="visually-hidden">Instagram</span>
                  </a>
                </div>
                <div className="github">
                  <a
                    href="https://github.com/YolCruz"
                    target="_blank"
                    className="github absolute w-14 aspect-square"
                  >
                    <span className="visually-hidden">Github</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="image" className="w-11/12 mx-auto">
          <img
            src="Rectangle 10 (1).svg"
            className="mx-auto shadow-slate-900 shadow-2xl lg:min-h-full"
            alt="Mountains and the sky in a sunset"
          />
        </div>
      </div>
    );
  }
}

export default Main;
