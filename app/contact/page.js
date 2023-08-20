"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Form } from "@/components/Form";
import { Social } from "@/components/Social";

export default function ContactPage() {
    useEffect(() => {
      Aos.init();
    }, []);
  return (
    <div className="row content-page" data-aos="fade-up">
      <div className="left-contact col-md-6 z-99 d-flex justify-content-center align-aitems-center flex-column">
        <h1 className="contact-title purples">Contact</h1>
        <p>Get in touch with me via social media or email.</p>
        <Social whatsapp="true" />
      </div>
      <div className="col-md-6 z-99">
        <h2 className="form-title">Send Me A Message</h2>
        <Form />
      </div>
    </div>
  );
}
