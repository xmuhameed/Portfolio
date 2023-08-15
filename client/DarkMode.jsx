'use client'
import Document from 'next/document';
import React from 'react'
import { useState } from 'react';
import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { ParticlesBackground } from './ParticlesBackground';

export const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
    }
    const [Dark, setDark] = useState(false);
    const toggler = e => {
        if (e.target.checked) {
            setDarkMode();
            setDark(true)
        } else {
            setLightMode()
            setDark(false);
        }
    }
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
            <FiSun className="sun" />
            <GoMoon className="moon" />
          </label>
        </div>
      </>
    );
}
