import Link from "next/link";
import logo from "../public/logo.svg"
import Image from "next/image";
import { NavbarM } from "./NavbarM";

export default function Navbar() {
    return (
      <div className="container position-absolute row navBar navBar-cont mt-3 z-999">
        <div className="col-5 z-999 navLinks">
          <Link className="z-999 navLink" href="/portfolio">
            Portfolio
          </Link>
          <Link className="ms-4 z-999 navLink" href="/about">
            About Me
          </Link>
          {/* <Link className="ms-4 z-999 navLink" href="/servics">
            Services
          </Link> */}
        </div>
        <div className="col-auto col-md-2 z-99 logo-holder">
          <Link href="/" className="logo">
            <Image src={logo} alt="logo" className="logo" priority={true} />
          </Link>
        </div>
        <div className="col-10 col-md-5 d-flex align-items-center justify-content-end z-99">
          <Link href="/contact" className="btn contact-btn">
            Contact me
          </Link>
        </div>
        <NavbarM />
      </div>
    );
}