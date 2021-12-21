import React, { useRef } from "react";
import emailjs from "emailjs-com"

export interface Props {
  visible: String,
}

class Contact extends React.Component<Props, object> {

  sendEmail = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  render() {
    const form = useRef<HTMLFormElement | null>(null);
  return (
    <form ref={form} onSubmit={this.sendEmail}>

    </form>
  )}
}