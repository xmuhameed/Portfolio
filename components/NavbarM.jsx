'use client'
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineAlignLeft,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPersonVcard, BsTelephone } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";


export const NavbarM = () => {
  useEffect(() => {
    Aos.init();
  }, []);


  const pathname = usePathname();
  const [ButtonActive, setButtonActive] = useState(false);


  const handleNav = (e) => {
    const links = Array.from(document.getElementsByClassName("nLM"));
    links.forEach((link) => link.classList.remove("active"));
    e.currentTarget.classList.add("active");
    setTimeout(() => setButtonActive(false),800)
  };
  const handleNavref = () => {
    Array.from(document.getElementsByClassName("nLM")).forEach((link) =>
      link.classList.remove("active")
    );
    pathname === "/"
      ? document.getElementById("home-link").classList.add("active")
      : pathname === "/portfolio"
      ? document.getElementById("portfolio-link").classList.add("active")
      : pathname === "/about"
      ? document.getElementById("about-link").classList.add("active")
      : document.getElementById("contact-link").classList.add("active");
  };

  const ActiveButton = () => { setButtonActive(true)};
  const unActiveButton = () => { setButtonActive(false) };
  
  useEffect(() => {
    ButtonActive === true && handleNavref(); 
  }, [ButtonActive]);

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
            className="z-9999 position-absolute navLinksM row justify-content-around"
            data-aos="fade-right"
          >
            <Link
              className="navLink nLM col-2"
              id="home-link"
              href="/"
              onClick={handleNav}
            >
              <AiOutlineHome />
              <span nav-title="Home"></span>
            </Link>
            <Link
              className="navLink nLM col-2"
              id="portfolio-link"
              href="/portfolio"
              onClick={handleNav}
            >
              <CgDatabase />
              <span nav-title="Portfolio"></span>
            </Link>
            <Link
              className="navLink nLM col-2"
              id="about-link"
              href="/about"
              onClick={handleNav}
            >
              <BsPersonVcard />
              <span nav-title="About"></span>
            </Link>
            <Link
              className="navLink nLM col-2"
              id="contact-link"
              href="/contact"
              onClick={handleNav}
            >
              <BsTelephone />
              <span nav-title="Contact"></span>
            </Link>
            <span></span>
          </div>
          <div onClick={unActiveButton} className="closeNav z-999"></div>
        </>
      )}
    </div>
  );
};
