import emailjs from "emailjs-com";
import React, { FormEvent, useRef, useState } from "react";
import animations from "styles/animations.module.scss";
import ErrorPromp from "./error-promp";
import SentPromp from "./sent-promp";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [messageSent, setMessageSent] = useState("hidden");
  const [messageError, setMessageError] = useState("hidden");
  const [anim, setAnim] = useState("");

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
    <section id="contact">
      <ErrorPromp error={messageError} anim={anim} />
      <SentPromp sent={messageSent} anim={anim} />
    </section>
  );
}
