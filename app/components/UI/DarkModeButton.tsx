"use client";
import { useGlobalContext } from "@/app/context/store";
import { GoMoon, GoSun } from "react-icons/go";

export const DarkModeButton = () => {
  const { mode, setMode } = useGlobalContext();
  const toggler = () => {
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("mode", "light");
    } else {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    }
  };
  return (
    <div className="relative">
      <input
        className="dark_mode_input w-0 h-0 invisible"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggler}
        checked={!!(mode === "dark")}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <GoSun className="duration-700 sun" size="2.5rem" />
        <GoMoon className="duration-700 moon" size="2.5rem" />
      </label>
    </div>
  );
};
