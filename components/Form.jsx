'use client'
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";

export const Form = () => {
  const [value, setValue] = useState();
  const [Mail, setMail] = useState(true)
  const contactToggler = (e) => {
    if (e.target.checked) {
      setMail(false);
    } else {
      setMail(true);
    }
  };
let elementToRender = null;

if (Mail) {
  elementToRender = (
    <input
      className="in-put form-p email-input"
      type={Mail ? "email" : "phone"}
      placeholder={Mail ? "Your Email" : "Your Phone Number"}
      name="from_contact"
      id="email-toggle"
    />
  );
} else {
  elementToRender = (
    <PhoneInput
      placeholder="Your Phone Number"
      value={value}
      onChange={setValue}
      className="in-put form-p email-input"
      name="from_contact"
      defaultCountry="EG"
    />
  );
  }

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
         e.target.reset();
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
    {elementToRender}
    {/* <input
      className="in-put form-p email-input"
      type={Mail ? "email" : "phone"}
      placeholder={Mail ? "Your Email" : "Your Phone Number"}
      name="from_contact"
      id="email-toggle"
      /> */}
    {/* <PhoneInput
      placeholder="Your Phone Number"
      value={value}
      onChange={setValue}
      className="in-put form-p email-input"
      name="from_contact"
      defaultCountry="EG"
    /> */}
    <input
      type="checkbox"
      className="contact-input"
      id="contact-toggle"
      onChange={contactToggler}
    />
    <label className="contact_label" for="contact-toggle">
      <AiOutlineMail className="email" size="1.5rem" />
      <AiOutlinePhone className="phone" size="1.5rem" />
    </label>
    <input
      className="in-put form-p messege-area"
      type="text"
      placeholder="Your Message"
      name="message"
    />
    <input className="btn submit form-p" type="submit" value="Send" />
  </form>
);
}
