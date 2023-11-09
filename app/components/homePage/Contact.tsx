import React from "react";
import { ContactForm } from "../UI/ContactForm";
import { BiMailSend } from "react-icons/bi";
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-12 md:gap-8 min-h-screen pt-48" id="contact">
      <div className="w-full lg:w-1/2">
          <div className="mx-auto w-fit">
          <h1 className="relative text-[#61677A] dark:text-white text-3xl font-medium w-fit mx-auto mb-8">
            Get in Touch
          </h1>
        <div className="flex items-start flex-col gap-7 dark:text-white">
          <div className="flex items-center justify-center gap-4 md:gap-7 relative">
            <a
              href="mailto:business@mohamedmostafa.me"
              className="w-24 h-24 flex justify-center items-center bg-slate-200 dark:bg-zinc-900 opacity-50"
            >
              <BiMailSend size="2.5rem" className="" />
            </a>
            <a href="mailto:business@mohamedmostafa.me" className="text-[#61677A] dark:text-white">
              business@mohamedmostafa.me
            </a>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-7 relative">
            <a
              href="tel:+201124246116"
              className="w-24 h-24 flex justify-center items-center bg-slate-200 dark:bg-zinc-900 opacity-50"
            >
              <FaPhone size="2.5rem" className="" />
            </a>
            <a href="tel:+201124246116" className="text-[#61677A] dark:text-white">+201124246116</a>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-7 relative">
            <span className="w-24 h-24 flex justify-center items-center bg-slate-200 dark:bg-zinc-900 opacity-50">
              <FaMapLocationDot size="2.5rem" className="" />
            </span>
            <span className="text-[#61677A] dark:text-white">Giza, Egypt</span>
          </div>
        </div>
          </div>
      </div>
      <div className="w-full lg:w-1/2">
        <ContactForm />
      </div>
    </section>
  );
};
