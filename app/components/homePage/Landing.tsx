import { AiOutlineDownload } from "react-icons/ai";
import TypingText from "../UI/TypingText";
import { Social } from "../UI/Social";
import Image from "next/image";
import img from '../../../public/landing-9.png'

export const Landing = () => {
  return (
    <section className="grid grid-cols-2 h-screen" id="home">
      <div className="mt-32 [400px]:mt-32 md:mt-56 pl-6 md:pl-16 lg:pl-24 xl:pl-32">
        <h1 className="font-bold xl:text-[3.4rem] lg:text-[2.8rem] md:text-[2.1rem] sm:text-2xl text-2xl text-altColor dark:text-altDark mb-3 w-fit">
          Hi, i&apos;m
        </h1>
        <h1 className="md:my-10 xl:text-[3.4rem] lg:text-[2.8rem] md:text-[2.1rem] text-3xl text-mainColor dark:text-white font-bold md:w-fit w-[75vw] relative">
          Mohamed Mostafa
        </h1>
        <div className="text-altColor dark:text-[#acb1d6] text-xl md:text-xl lg:text-3xl mt-3 mb-8 [400px]:mb-5 md:mt-5 md:mb-8 md:w-fit w-[75vw] relative">
          <TypingText typingContent={["i'm a Frontend Developer", "i'm a Web Developer", "i'm a Fullstack Developer", "i'm a MERN stack Developer", "i'm a React Developer"]} />
        </div>
        <div className="flex md:flex-row flex-col gap-4 max-[400px]:gap-6 mb-8 md:mb-12 w-fit">
          <button className="relative text-white bg-[#61677A] dark:text-black dark:bg-white rounded-[100px] px-3 py-2 hover:opacity-80 duration-200 inline">
            Hire me
          </button>
          <a
            className="relative text-white bg-[#8294c4] dark:text-black dark:bg-[#acb1d6] rounded-[100px] px-3 py-2 hover:opacity-80 duration-200 flex justify-center items-center gap-1 w-fit"
            href="https://raw.githubusercontent.com/xmuhameed/cv/main/cv.pdf"
            target="_blank"
          >
            Resume <AiOutlineDownload />
          </a>
        </div>
        <Social />
      </div>
      <div className="landing-img h-full">
      </div>
    </section>
  );
};
