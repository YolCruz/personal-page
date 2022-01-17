import { NextPage } from "next";
import emailjs from "emailjs-com";
import React, { FormEvent, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Website } from "components/layouts";
import animations from "styles/animations.module.scss";

const Contact: NextPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [displayMessageSent, setDisplayMessageSent] = useState("hidden");
  const [displayMessageError, setDisplayMessageError] = useState("hidden");
  const [anim, setAnim] = useState("");
  const [loadingDisplay, setLoadingDisplay] = useState("hidden");
  const [sentDisplay, setSentDisplay] = useState("block");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoadingDisplay("flex");

    setSentDisplay("hidden");

    if (form.current) {
      emailjs
        .sendForm(
          "service_rr4ukhs",
          "contact_form",
          form.current,
          "user_M9fGGRsRtOzzEoBOCsy27"
        )
        .then(
          (result) => {
            if (result.status === 200) {
              setLoadingDisplay("hidden");
              setSentDisplay("block");
              setDisplayMessageSent("grid");
              setAnim(`${animations.message_sent}`);
              setTimeout(() => {
                setDisplayMessageSent("hidden");
              }, 2000);
            }
            console.log(result);
          },
          (error) => {
            setLoadingDisplay("hidden");
            setSentDisplay("block");
            setDisplayMessageError("grid");
            setAnim(`${animations.message_sent}`);
            setTimeout(() => {
              setDisplayMessageError("hidden");
            }, 1500);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Website
      title="Contact"
      description="Here you can find my socials and you can even sent me an email from here"
    >
      <div
        className={`fixed inset-0 bg-black z-10 py-16 bg-opacity-50 place-items-center max-w-full ${displayMessageSent} ${animations.durations} opacity-0 ${anim}`}
      >
        <div className="w-screen h-fit text-white">
          <h1 className="text-center text-3xl bg-blue-500 py-6 mx-10">
            Message send!
          </h1>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black z-10 py-16 bg-opacity-50 place-items-center max-w-full ${displayMessageError} ${animations.durations} opacity-0 ${anim}`}
      >
        <div className="w-screen h-fit text-white">
          <h1 className="text-center text-3xl bg-red-600 py-6 mx-10">
            Something went wrong
          </h1>
        </div>
      </div>
      <main className="w-screen min-h-screen max-w-full bg-slate-700 pt-16 text-white font-open-sans">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-2xl py-4 px-1">
              Send me a message in my socials:
            </h1>
            <ul className=" bg-slate-500 px-1 py-4 flex flex-col gap-4 sm:px-10">
              <li className="flex gap-6 items-center justify-between">
                <div className="border-2 rounded-md p-1">
                  <Icon
                    icon="akar-icons:github-fill"
                    color="white"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="w-full border-2 rounded-md bg-slate-500 hover:bg-slate-400 active:bg-slate-600">
                  <p className="text-3xl text-center min-w-full min-h-full">
                    <a
                      href="https://github.com/YolCruz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full h-full py-4"
                    >
                      GitHub
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-center justify-between">
                <div className="border-2 rounded-md p-1">
                  <Icon
                    icon="akar-icons:linkedin-fill"
                    color="white"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="w-full border-2 rounded-md bg-slate-500 hover:bg-slate-400 active:bg-slate-600">
                  <p className="text-3xl text-center">
                    <a
                      href="https://www.linkedin.com/in/yolcruztello/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full h-full py-4"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-center justify-between">
                <div className="border-2 rounded-md p-1">
                  <Icon
                    icon="akar-icons:twitter-fill"
                    color="white"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="w-full border-2 rounded-md bg-slate-500 hover:bg-slate-400 active:bg-slate-600">
                  <p className="text-3xl text-center">
                    <a
                      href="https://twitter.com/YolticCruzTello"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full h-full py-4"
                    >
                      Twitter
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex gap-6 items-center justify-between">
                <div className="border-2 rounded-md p-1">
                  <Icon
                    icon="akar-icons:instagram-fill"
                    color="white"
                    width="60"
                    height="60"
                  />
                </div>
                <div className="w-full border-2 rounded-md bg-slate-500 hover:bg-slate-400 active:bg-slate-600">
                  <p className="text-3xl text-center">
                    <a
                      href="https://www.instagram.com/yoltic.cruz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full h-full py-4"
                    >
                      Instagram
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl py-4 px-1">Send me an email:</h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-slate-500 px-1 pt-6 pb-7 flex flex-col gap-4 sm:px-10"
            >
              <div className="flex flex-col">
                <label htmlFor="user_name" className="text-xl">
                  Your name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Write your name"
                  className="text-black p-1 text-lg"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="user_email" className="text-xl">
                  Your email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Write your email"
                  className="text-black p-1 text-lg"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xl">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write a message"
                  rows={5}
                  className="text-black p-1 text-lg"
                  required
                />
              </div>
              <input
                type="submit"
                value="Send"
                className={`relative border-2 p-1 text-2xl bg-slate-600 hover:bg-slate-700 active:-top-1 ${sentDisplay}`}
              />
              <div
                className={`border-2 p-1 text-2xl bg-slate-600 flex items-center justify-center ${loadingDisplay}`}
              >
                <p className={`${animations.loading_letters} ${animations.l1}`}>
                  L
                </p>
                <p className={`${animations.loading_letters} ${animations.l2}`}>
                  o
                </p>
                <p className={`${animations.loading_letters} ${animations.l3}`}>
                  a
                </p>
                <p className={`${animations.loading_letters} ${animations.l4}`}>
                  d
                </p>
                <p className={`${animations.loading_letters} ${animations.l5}`}>
                  i
                </p>
                <p className={`${animations.loading_letters} ${animations.l6}`}>
                  n
                </p>
                <p className={`${animations.loading_letters} ${animations.l7}`}>
                  g
                </p>
                <p className={`${animations.loading_letters} ${animations.l8}`}>
                  .
                </p>
                <p className={`${animations.loading_letters} ${animations.l9}`}>
                  .
                </p>
                <p
                  className={`${animations.loading_letters} ${animations.l10}`}
                >
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Website>
  );
};

export default Contact;
