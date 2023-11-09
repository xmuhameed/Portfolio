"use client";
import Image from "next/image";
import HoverVideoPlayer from "react-hover-video-player";
import { AiOutlineEye } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";
import { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { useGlobalContext } from "../context/store";
import { usePathname } from 'next/navigation'

interface FlippedCards {
  [projectId: string]: boolean;
}

export const Projects = ({ projects }: any) => {
  const [flippedCards, setFlippedCards] = useState<FlippedCards>({});
  const [projectsState, setProjectsState] = useState(projects);
  const {filtertion} = useGlobalContext();
  let x = 0;
  const pathname = usePathname()
  

  const cardFlip = (projectId: string) => {
    setFlippedCards((prevFlippedCards) => ({
      ...prevFlippedCards,
      [projectId]: !prevFlippedCards[projectId],
    }));
    if (flippedCards[projectId] === true) {
      document.getElementById(`${projectId}`)?.classList.remove("flip");
    } else {
      document.getElementById(`${projectId}`)?.classList.add("flip");
    }
  };
  return (
    <>
      {projectsState.map((p: any, i: number) => {
        if (filtertion != "all" && filtertion != p.categorie) return null;
        x++;
        if (x > 6 && pathname == "/") return null;
        return (
          <div className="rounded-xl overflow-hidden flex flex-col gap-4 relative" key={p._id}>
            <div id={`${p._id}`} className="duration-300 relative w-full h-full">
              <div
                className={`h-full w-full ${
                  flippedCards[p._id]
                    ? "invisible opacity-0"
                    : "visible flex justify-center items-center"
                }`}
              >
                <HoverVideoPlayer
                  restartOnPaused
                  videoSrc={`/${p.slug.current}.mp4`}
                  className="w-full h-full"
                  pausedOverlay={
                    <div className="relative w-full h-full">
                      <Image
                        src={urlForImage(p.image).url()}
                        alt="image of project"
                        className="object-cover"
                        width={1536}
                        height={708}
                      />
                      <span className="grid place-content-center md:hidden absolute top-2 left-2 opacity-75">
                        <span className="relative flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
                        </span>
                      </span>
                    </div>
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </div>
              <div
                className={`${
                  flippedCards[p._id] ? "" : "invisible opacity-0"
                } flex justify-center items-center flex-wrap gap-2 bg-transparent absolute top-0 left-0 w-full h-full flip`}
              >
                {p.skills.map((image: any, i: number) => {
                  return (
                    <Image
                      className="max-md:w-16 max-md:h-16"
                      key={i}
                      src={urlForImage(image).url()}
                      width={80}
                      height={80}
                      alt="img"
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex justify-between items-center gap-1 px-3">
              <div className="">
                <h3 className="text-xl lg:text-lg xl:text-2xl font-bold dark:text-white">
                  {p.title}
                </h3>
                <h6 className="text-xs md:text-base text-gray-600 dark:text-gray-500">
                  {p.description}
                </h6>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="cursor-pointer"
                  onClick={() => cardFlip(p._id)}
                >
                  <BsCodeSlash className="hover:scale-110 hover:text-[#ACB1D6] hover:border-[#ACB1D6] dark:hover:text-[#ACB1D6] dark:hover:border-[#ACB1D6] duration-200 rounded-full border-[1px] border-solid border-gray-700 text-gray-700 dark:border-white dark:text-white p-[3px] text-4xl" />
                </span>
                <a href={p.repo} className="" target="_blank">
                  <LuGithub className="hover:scale-110 hover:text-[#ACB1D6] hover:border-[#ACB1D6] dark:hover:text-[#ACB1D6] dark:hover:border-[#ACB1D6] duration-200 rounded-full border-[1px] border-solid border-gray-700 text-gray-700 dark:border-white dark:text-white p-[3px] text-4xl" />
                </a>
                <a href={p.live} className="" target="_blank">
                  <AiOutlineEye className="hover:scale-110 hover:text-[#ACB1D6] hover:border-[#ACB1D6] dark:hover:text-[#ACB1D6] dark:hover:border-[#ACB1D6] duration-200 rounded-full border-[1px] border-solid border-gray-700 text-gray-700 dark:border-white dark:text-white p-[3px] text-4xl" />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
