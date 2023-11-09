"use client";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineHome,
} from "react-icons/ai";
import { BsPersonVcard, BsTelephone } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";


export const NavMobile = () => {
  const [ButtonActive, setButtonActive] = useState(false);
  return (
    <>
      <div className={`md:hidden`}>
        <button
          className="flex items-end flex-col gap-2 w-9 relative"
          onClick={() => setButtonActive(!ButtonActive)}
        >
          <div
            className={`h-1 w-9 bg-[#61677A] dark:bg-[#AEBDCA] ${
              ButtonActive
                && "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 rotate-[45deg]"
            }`}
          >
            <span className={`w-3/12 h-full block bg-white dark:bg-backgroundColor ${ButtonActive && "hidden"}`}></span>
            </div>
            <div
              className={`h-1 w-9 bg-[#61677A] dark:bg-[#AEBDCA] ${
                ButtonActive && "hidden"
              }`}
            ></div>
          <div
            className={`h-1 w-9 bg-[#61677A] dark:bg-[#AEBDCA] ${
              ButtonActive
                && "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-500 -rotate-[45deg]"
            }`}
          >
            <span className={`w-1/2 h-full block bg-white dark:bg-backgroundColor ${ButtonActive && "hidden"}`}></span>
            </div>
        </button>
        {ButtonActive && (
          <div
            className="absolute -top-[9vh] -left-[100vw] w-[200vw] h-screen z-[9]"
            onClick={() => setButtonActive(false)}
          ></div>
        )}
      </div>
      <div
        className={`absolute top-10 -right-[0.20rem] transition-all duration-500 flex flex-col gap-4 z-10 md:hidden text-[#61677A] dark:text-[#AEBDCA] ${
          ButtonActive
            ? "translate-y-0 visible opacity-100"
            : "translate-y-[100vh] invisible opacity-0"
        }`}
      >
        <a href="#home" className="hover:opacity-80" onClick={() => setButtonActive(false)}>
            <AiOutlineHome size="2.5rem" />
        </a>
        <a href="#about" className="hover:opacity-80" onClick={() => setButtonActive(false)}>
            <BsPersonVcard size="2.5rem" />
        </a>
        <a href="#portfolio" className="hover:opacity-80" onClick={() => setButtonActive(false)}>
            <CgDatabase size="2.5rem" />
        </a>
        <a href="#contact" className="hover:opacity-80" onClick={() => setButtonActive(false)}>
            <BsTelephone size="2.5rem" />
        </a>
      </div>
    </>
  );
};
