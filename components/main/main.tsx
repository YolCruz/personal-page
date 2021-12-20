import Image from "next/image";

const Main = () => {
    return (
      <div id="main-content" className="">
        <div id="hero" className="w-11/12 max-w-2xl mx-auto">
          <div id="hero-avatar" className="mb-10 flex justify-center">
            <div className="w-52 -rotate-6 aspect-square bg-green-800 flex items-center justify-center shadow-slate-700 shadow-xl">
              <div className="flex rotate-6 shadow-slate-700 shadow-xl">
                <Image
                  src="/Me_Avatar.jpg"
                  height={208}
                  width={208}
                  alt="The developer"
                />
              </div>
            </div>
          </div>
          <main
            id="hero-description"
            className="font-numans text-blue-50 bg-black bg-opacity-60 rounded-xl py-5 px-10 flex flex-col gap-6"
          >
            <h1 className="text-5xl">Hi, I&apos;m Yoltic</h1>
            <p className="text-2xl">
              I desing & build websites.
            </p>
            <p className="text-2xl">
            I like to solve coding problems for fun
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
                    rel="noreferrer"
                    className="absolute w-14 aspect-square instagram"
                  >
                    <span className="visually-hidden">Instagram</span>
                  </a>
                </div>
                <div className="github">
                  <a
                    href="https://github.com/YolCruz"
                    target="_blank"
                    rel="noreferrer"
                    className="github absolute w-14 aspect-square"
                  >
                    <span className="visually-hidden">Github</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="image" className="mx-auto shadow-slate-900 shadow-lg">
          <Image
            src="/Rectangle 10 (1).svg"
            alt="Mountains and the sky in a sunset"
            width={680}
            height={516}
          />
        </div>
      </div>
    );
  }

export default Main;
