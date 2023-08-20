"use client"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { PiLinkSimpleBold, PiGithubLogo } from "react-icons/pi";
import Image from "next/image";
import project1 from "../public/project-1.png";
import project2 from "../public/project-2.png";
import project3 from "../public/project-3.png";
import project4 from "../public/project-4.png";

export const Projects = () => {
    useEffect(() => {
      Aos.init();
    }, []);
return (
  <>
    <div
      data-aos="fade-up"
      className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center project-card"
    >
      {" "}
      {/*project 4*/}
      <div className="card">
        <div className="image">
          <Image
            src={project4}
            className="img"
            width={500}
            height={500}
            alt="Picture of the Project"
          />
        </div>
        <h2 className="card-title">Dashboard</h2>
        <div className="content">
          <h3>Dashboard Project</h3>
          <p>
            Html <br />
            Css <br />
            JavaScript <br />
            Mobile Responsive <br />
          </p>
          <a
            href="https://github.com/xmuhameed/Dashbord-project"
            target="_blank"
          >
            <PiGithubLogo size={"2.5rem"} className="me-3" />
          </a>
          <a
            href="https://xmuhameed.github.io/Dashbord-project/"
            target="_blank"
          >
            <PiLinkSimpleBold size={"2.5rem"} />
          </a>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center project-card"
    >
      {" "}
      {/*project 3*/}
      <div className="card">
        <div className="image">
          <Image
            src={project3}
            className="img"
            width={500}
            height={500}
            alt="Picture of the Project"
          />
        </div>
        <h2 className="card-title">Elzero</h2>
        <div className="content">
          <h3>Elzero Project</h3>
          <p>
            Html <br />
            Css <br />
            JavaScript <br />
            Mobile Responsive <br />
          </p>
          <a href="https://github.com/xmuhameed/Elzero-project" target="_blank">
            <PiGithubLogo size={"2.5rem"} className="me-3" />
          </a>
          <a href="https://xmuhameed.github.io/Elzero-project/" target="_blank">
            <PiLinkSimpleBold size={"2.5rem"} />
          </a>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center project-card sec-card"
    >
      {" "}
      {/*project 2*/}
      <div className="card">
        <div className="image">
          <Image
            src={project2}
            className="img"
            width={500}
            height={500}
            alt="Picture of the Project"
          />
        </div>
        <h2 className="card-title">Kasper</h2>
        <div className="content">
          <h3>Kasper-project</h3>
          <p>
            Html <br />
            Css <br />
            JavaScript <br />
            Mobile Responsive <br />
          </p>
          <a href="https://github.com/xmuhameed/Kasper-project" target="_blank">
            <PiGithubLogo size={"2.5rem"} className="me-3" />
          </a>
          <a href="https://xmuhameed.github.io/Kasper-project/" target="_blank">
            <PiLinkSimpleBold size={"2.5rem"} />
          </a>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
      className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center align-items-center project-card"
    > {/*project 1*/}
      <div className="card">
        <div className="image">
          <Image
            src={project1}
            className="img"
            width={500}
            height={500}
            alt="Picture of the Project"
          />
        </div>
        <h2 className="card-title">Leon</h2>
        <div className="content">
          <h3>Leon Project</h3>
          <p>
            Html <br />
            Css <br />
            JavaScript <br />
            Mobile Responsive <br />
          </p>
          <a href="https://github.com/xmuhameed/Leon-Project" target="_blank">
            <PiGithubLogo size={"2.5rem"} className="me-3" />
          </a>
          <a href="https://xmuhameed.github.io/Leon-Project" target="_blank">
            <PiLinkSimpleBold size={"2.5rem"} />
          </a>
        </div>
      </div>
    </div>
  </>
);
};
