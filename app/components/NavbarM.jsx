'use client'
import Link from "next/link";
import { useState } from "react";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";



export const NavbarM = () => {

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
            <div className="z-9999 position-absolute navLinksM">
              <Link className="navLink" href="/">
                Home
              </Link>
              <Link className="navLink" href="/portfolio">
                Portfolio
              </Link>
              <Link className="navLink" href="/servics">
                Services
              </Link>
              <Link className="navLink" href="/about">
                About
              </Link>
              <Link className="navLink" href="/contact">
                Contact
              </Link>
            </div>
          <div onClick={unActiveButton} className="closeNav z-999"></div>
        </>
      )}
    </div>
  );
};
