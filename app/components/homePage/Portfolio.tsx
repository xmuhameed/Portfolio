import { Projects } from "../Projects";
import { client } from '../../../sanity/lib/client'
import { SanityProject } from "next-sanity";
import { ProjectsFilter } from "../ProjectsFilter";
import Link from "next/link";

type Props = {
  seeMore?: boolean;
}

export const Portfolio = async ({seeMore}: Props) => {
  const projects = await client.fetch<SanityProject[]>(`*[_type == "project"]|order(_updatedAt desc)`)
  
  return (
    <section className="pt-20 mx-3 md:mx-14 lg:mx-20 xl:mx-28" id="portfolio">
      <h2 className="text-3xl md:text-5xl font-bold mb-9 mx-auto w-fit dark:text-white relative">Some of my <span className="text-mainColor">recent</span> work</h2>
      <div className="flex justify-center items-center flex-wrap gap-3 mb-9 relative">
        <ProjectsFilter projects={projects} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mx-6 mb-10">
        <Projects projects={projects} />
      </div>
      {!seeMore && <Link href="/portfolio" className="mx-auto w-fit block relative text-white font-bold bg-[#61677A] dark:text-black dark:bg-white rounded-[100px] px-6 py-2 hover:opacity-80 duration-200">see more</Link>}
    </section>
  );
};