import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { IoIosArrowUp } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="mt-28 bg-gray-200 dark:bg-[#1F2022] text-[#61677A] dark:text-zinc-400 text-xs md:text-base max-md:px-4 relative flex justify-between md:justify-evenly items-center py-8">
      <span className="">&#9400; 2023 Mohamed Mostafa</span>
      <div className="flex justify-center items-center gap-2 md:gap-3">
        <a
          href="https://www.instagram.com/xmuhameed"
          target="_blank"
          className="socialIHover"
        >
          <BiLogoInstagram className="text-xl md:text-3xl" />
        </a>
        <a
          href="https://www.facebook.com/xmuhameed"
          target="_blank"
          className="socialIHover"
        >
          <BiLogoFacebook className="text-xl md:text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/xmuhameed"
          target="_blank"
          className="socialIHover"
        >
          <BiLogoLinkedinSquare className="text-xl md:text-3xl" />
        </a>
        <a
          href="https://github.com/xmuhameed"
          target="_blank"
          className="socialIHover"
        >
          <BiLogoGithub className="text-xl md:text-3xl" />
        </a>
        <a href="https://wa.me/+201124246116" target="_blank">
          <BiLogoWhatsapp className="text-xl md:text-3xl" />
        </a>
      </div>
      <a href="#home" className="absolute -top-8 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-gray-200 dark:bg-[#1F2022] flex justify-center text-5xl hover:scale-110 duration-200">
        <IoIosArrowUp />
      </a>
    </footer>
  );
};
