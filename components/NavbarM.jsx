'use client'
import Link from "next/link";
import { useState } from "react";
import {
  AiFillDatabase,
  AiFillHome,
  AiFillMail,
  AiOutlineAlignLeft,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
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
              <AiFillHome />
            </Link>
            <Link className="navLink" href="/portfolio">
              <AiFillDatabase />
            </Link>
            <Link className="navLink" href="/about">
              <BsFillPersonFill />
            </Link>
            <Link className="navLink" href="/contact">
              <AiFillMail />
            </Link>
          </div>
          <div onClick={unActiveButton} className="closeNav z-999"></div>
        </>
      )}
    </div>
  );
};
