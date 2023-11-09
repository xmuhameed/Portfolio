"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [value, setValue] = useState();
  const [Mail, setMail] = useState(true);
  const contactToggler = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
        className="in-put w-full p-2"
        type={Mail ? "email" : "phone"}
        placeholder={Mail ? "Your Email" : "Your Phone Number"}
        name="from_contact"
        id="email-toggle"
        required
      />
    );
  } else {
    elementToRender = (
      <PhoneInput
        className="in-put w-full p-2"
        placeholder="Your Phone Number"
        value={value}
        onChange={() => setValue}
        name="from_contact"
        defaultCountry="EG"
        required
      />
    );
  }

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_fzy9y9n",
          "template_3yn1h3r",
          form.current,
          "ahhZG7sEkbpITM_vy"
        )
        .then(
          (result) => {
            toast("Message Sent Successfully", {
              hideProgressBar: true,
              autoClose: 3000,
              type: "success",
              position: "bottom-right",
            });
            console.log(result.text);
            (e.target as HTMLFormElement).reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Form is null");
    }
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex justify-center mx-auto flex-col gap-8 w-11/12 lg:w-9/12 xl:w-6/12"
    >
      <h1 className="relative w-fit mx-auto text-[#61677A] dark:text-white text-3xl font-medium">Send a Message to me</h1>
      <input
        className="in-put w-full p-2 relative"
        type="name"
        placeholder="Your Name"
        name="from_name"
        required
      />
      <div className="relative w-full">
        {elementToRender}
        <input
          type="checkbox"
          className="contact-input w-0 h-0 hidden"
          id="contact-toggle"
          onChange={contactToggler}
        />
        <label className="contact_label" htmlFor="contact-toggle">
          <AiOutlineMail className="email" size="1.5rem" />
          <AiOutlinePhone className="phone" size="1.5rem" />
        </label>
      </div>
      <textarea
        className="in-put w-full p-2 h-32 relative resize-y"
        placeholder="Your Message"
        name="message"
        required
      />
      <input
        className="relative text-white bg-[#61677A] dark:text-black dark:bg-white rounded-[100px] px-3 py-2 mx-auto hover:opacity-80 duration-200 w-5/12 cursor-pointer"
        type="submit"
        value="Send"
      />
    </form>
  );
};
