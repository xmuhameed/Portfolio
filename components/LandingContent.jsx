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
    <div className="col-6 landing-content p-content z-99" data-aos="fade-up">
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
        href="https://www.mediafire.com/file/yk57y00rozzbrjp/Resume-Mo.pdf/file"
        target="_blank"
      >
        Resume <AiOutlineDownload />
      </a>
      <Social />
    </div>
  );
};
