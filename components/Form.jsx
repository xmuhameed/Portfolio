'use client'
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
    const [Mail, setMail] = useState(true)
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault();

   emailjs
     .sendForm(
       "service_fzy9y9n",
       "template_3yn1h3r",
       form.current,
       "ahhZG7sEkbpITM_vy"
     )
     .then(
       (result) => {
         console.log(result.text);
       },
       (error) => {
         console.log(error.text);
       }
     );
 };
return (
  <form
    ref={form}
    onSubmit={sendEmail}
    className="d-flex jusify-content-center align-items-center flex-column"
  >
    <input
      className="in-put form-p"
      type="name"
      placeholder="Your Name"
      name="from_name"
    />
    {Mail ? (
      <input
        className="in-put form-p"
        type="email"
        placeholder="Your Email"
        name="from_contact"
      />
    ) : (
      <input
        className="in-put form-p phone-input"
        type="phone"
        placeholder="Your Phone"
        name="from_contact"
      />
    )}
    <input
      className="in-put form-p messege-area"
      type="text"
      placeholder="Your Message"
      name="message"
    />
    <input
      className="btn btn-primary submit form-p"
      type="submit"
      value="Send"
    />
  </form>
);
}
