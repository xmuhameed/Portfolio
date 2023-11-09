"use client";
import { useEffect } from "react";
import { useGlobalContext } from "../context/store";

export const ProjectsFilter = ({ projects }: any) => {
const categorie = projects.map((p: any) => p.categorie);
const uniqueCategorie = [...new Set(categorie)];
const {setFiltertion} = useGlobalContext();

useEffect(() => {
    const all = document.getElementById("all");
    all?.setAttribute("checked", "checked");
}, []);

  return (
    <>
      <div className="flex flex-col gap-2">
        <input
          type="radio"
          name="filter"
          id="all"
          className="hidden peer/radio"
        />
        <label
          htmlFor="all"
          onClick={() => setFiltertion("all")}
          className="cursor-pointer border-[1px] border-gray-500 border-solid rounded-xl text-lg py-1 px-2 text-black dark:text-white dark:border-gray-200 peer-checked/radio:bg-mainColor peer-checked/radio:border-mainColor peer-checked/radio:font-medium"
        >
          All
        </label>
      </div>
      {uniqueCategorie.map((c: any) => {
        return (
          <div className="flex flex-col gap-2" key={c}>
            <input
              type="radio"
              name="filter"
              id={c}
              className="hidden peer/radio"
            />
            <label
              onClick={() => setFiltertion(c)}
              htmlFor={c}
              className="cursor-pointer border-[1px] border-gray-500 border-solid rounded-xl text-lg py-1 px-2 text-black dark:text-white dark:border-gray-200 peer-checked/radio:bg-mainColor peer-checked/radio:border-mainColor peer-checked/radio:font-medium"
            >
              {c[0].toUpperCase() + c.substring(1, c.length)}
            </label>
          </div>
        );
      })}
    </>
  );
};
