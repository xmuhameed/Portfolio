'use client'
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineAlignLeft,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export const NavbarM = () => {
  useEffect(() => {
    Aos.init();
  }, []);

    const [ButtonActive, setButtonActive] = useState(false)
    const ActiveButton = () => {setButtonActive(true)};
    const unActiveButton = () => {setButtonActive(false)};

  return (
    <div>
      {ButtonActive === false ? (
        <button className="navButton btn" onClick={ActiveButton}>
          <AiOutlineAlignLeft size="3rem" />
        </button>
      ) : (
        <>
          <button className="navButton btn" onClick={unActiveButton}>
            <AiOutlineClose size="3rem" />
          </button>
          <div
            className="z-9999 position-absolute navLinksM"
            data-aos="fade-right"
          >
            <Link className="navLink" href="/">
              <AiOutlineHome />
            </Link>
            <Link className="navLink" href="/portfolio">
              <CgDatabase />
            </Link>
            <Link className="navLink" href="/about">
              <BsPersonVcard />
            </Link>
            <Link className="navLink" href="/contact">
              <AiOutlineMail />
            </Link>
          </div>
          <div onClick={unActiveButton} className="closeNav z-999"></div>
        </>
      )}
    </div>
  );
};
