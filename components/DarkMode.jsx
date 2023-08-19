"use client";
import React from "react";
import { useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";
import { ParticlesBackground } from "./ParticlesBackground";

export const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const [Dark, setDark] = useState(false);
  const toggler = (e) => {
    if (e.target.checked) {
      setDarkMode();
      setDark(true);
    } else {
      setLightMode();
      setDark(false);
    }
  };
  return (
    <>
      <ParticlesBackground mode={Dark} />
      <div className="dark_mode">
        <input
          className="dark_mode_input"
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggler}
        />
        <label className="dark_mode_label" for="darkmode-toggle">
          <GoSun className="sun" size="2.5rem" />
          <GoMoon className="moon" size="2.5rem" />
        </label>
      </div>
    </>
  );
};
