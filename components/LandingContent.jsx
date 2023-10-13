"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TypingText from "@/components/TypingText";
import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";
import { Social } from "./Social";


export const LandingContent = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" className="col-6 landing-content p-content z-99">
      <h1>Hi, i'm</h1>
      <h1>
        <span> Mohamed Mostafa</span>
      </h1>
      <div className="text mb-4 mt-3">
        <TypingText />
      </div>
      <Link className="btn hire-btn" href="/contact">
        Hire me
      </Link>
      <a
        className="btn ms-3 resume"
        href="https://raw.githubusercontent.com/xmuhameed/cv/main/cv.pdf"
        target="_blank"
      >
        Resume <AiOutlineDownload />
      </a>
      <Social />
    </div>
  );
};
