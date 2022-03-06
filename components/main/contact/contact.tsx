import emailjs from "@emailjs/browser";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import animations from "styles/animations.module.scss";
import ErrorPromp from "./error-promp";
import SentPromp from "./sent-promp";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState("hidden");
  const [messageError, setMessageError] = useState("hidden");
  const [anim, setAnim] = useState("");
  const [anim2, setAnim2] = useState("")
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setAnim2(animations.move_card)
    }
  }, [inView])

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

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
              setMessageSent("grid");
              setAnim(`${animations.message_sent}`);
              setTimeout(() => {
                setMessageSent("hidden");
              }, 2000);
            }
            console.log(result);
          },
          (error) => {
            setMessageError("grid");
            setAnim(`${animations.message_sent}`);
            setTimeout(() => {
              setMessageError("hidden");
            }, 1500);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section id="contact" className={`${anim2} opacity-0`}>
      <ErrorPromp error={messageError} anim={anim} />
      <SentPromp sent={messageSent} anim={anim} />

      <div className="w-screen max-w-full bg-black-2 mt-10 pt-10 pb-28 px-1 md:px-80 md:py-20 text-white">
        <h1 ref={ref} className="text-2xl text-center py-1 px-1">Send me an email</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="px-1 pt-6 pb-4 flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="p-1 text-lg bg-purple-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              className="p-1 text-lg bg-purple-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write a message"
              rows={5}
              className="p-1 text-lg bg-purple-1"
              required
            />
          </div>
          <input
            type="submit"
            value="Send"
            className={`relative border-2 p-1 text-xl  active:-top-1`}
          />
        </form>
        <a href="/Resume_Yoltic.pdf" download={true} className="flex justify-center border-2 border-white p-1 m-1 text-xl active:bg-gray-700 underline underline-offset-1 text-blue-500 visited:text-purple-500">
          Download my resume
        </a>
      </div>
    </section>
  );
}
