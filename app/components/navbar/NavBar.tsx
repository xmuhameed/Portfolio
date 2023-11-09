'use client'
import Link from "next/link";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { DarkModeButton } from "../UI/DarkModeButton";
import { NavMobile } from "./NavMobile";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const NavBar = () => {
  const [sticky, setSticky] = useState(false)
  const path = usePathname()

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setSticky(true) : setSticky(false);
    });
  }
  return (
    <>
    <nav className={`w-full h-[5vh] md:h-[9vh] py-10 px-8 md:px-16 lg:px-24 xl:px-36 flex justify-between items-center fixed top-0 z-10 duration-300 ${sticky && "bg-slate-50 dark:bg-backgroundColor shadow-lg opacity-80 hover:opacity-95 max-md:right-0 max-md:w-24 max-md:h-28 max-md:pr-6 max-md:flex max-md:justify-end max-md:items-center max-md:rounded-bl-full max-md:bg-white max-md:dark:bg-backgroundColor"}`}>
      <div className={`hidden md:flex md:text-sm lg:text-base md:gap-3 lg:gap-7 xl:gap-8 w-4/12`}>
        <Link className="text-black dark:text-white hover:opacity-80 duration-150" href={`${path == "/portfolio" ? "/#about" : "#about"}`}>
          About Me
        </Link>
        <Link className="text-black dark:text-white hover:opacity-80 duration-150" href={`${path == "/portfolio" ? "/#servics" : "#servics"}`}>
          Services
        </Link>
        <Link className="text-black dark:text-white hover:opacity-80 duration-150" href={`${path == "/portfolio" ? "/#portfolio" : "#portfolio"}`}>
          Portfolio
        </Link>
      </div>
      <div className={`logo-holder md:w-1/12 grid place-content-center ${sticky && "max-md:hidden"}`}>
        <Link href={`${path == "/portfolio" ? "/" : "#home"}`} className="mt-4 md:mt-0 hover:scale-110 duration-300">
          <Image src={logo} alt="logo" className="w-20" priority={true} />
        </Link>
      </div>
      <div className="w-4/12 flex justify-end items-center gap-14 max-md:relative">
        <div className={`${sticky && "max-md:hidden"}`}>
        <DarkModeButton />
        </div>
        <Link href={`${path == "/portfolio" ? "/#contact" : "#contact"}`} className={`hidden md:block text-white bg-[#61677A] dark:text-black dark:bg-white rounded-[100px] px-3 py-2 hover:opacity-80 duration-200`}>
          Contact me
        </Link>
        <NavMobile />
      </div>
    </nav>
    </>
  );
};
