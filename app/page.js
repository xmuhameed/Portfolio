import Image from 'next/image'
import Link from 'next/link';
import TypingText from '@/components/TypingText';
import { AiOutlineDownload } from "react-icons/ai";
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

export default function Home() {
  return (
    <div className="container landing">
      <div className="row">
        <div className="col-6 landing-content p-content z-99">
          <h1>Hi, i'm</h1>
          <h1>
            <span> Mohamed Mostafa</span>
          </h1>
          <div className="text mb-4 mt-3">
            <TypingText />
          </div>
          <Link className="btn hire-btn" href="/contact">
            Hire me
          </Link>
          <a
            className="btn ms-3 resume"
            href="https://www.mediafire.com/file/ew1ws3hc94qtu12/my_resume.pdf/file"
            target="_blank"
          >
            Resume <AiOutlineDownload />
          </a>
          <div className="social-icons mt-5">
            <a href="https://www.instagram.com/xmuhameed" target="_blank">
              <BiLogoInstagram className="me-3 social-i" size="3rem" />
            </a>
            <a href="https://www.facebook.com/xmuhameed" target="_blank">
              <BiLogoFacebook className="me-3 social-i" size="3rem" />
            </a>
            <a href="https://twitter.com/xmuhameed" target="_blank">
              <BiLogoTwitter className="me-3 social-i" size="3rem" />
            </a>
            <a href="https://www.linkedin.com/in/xmuhameed" target="_blank">
              <BiLogoLinkedinSquare className="me-3 social-i" size="3rem" />
            </a>
            <a href="https://github.com/xmuhameed" target="_blank">
              <BiLogoGithub className="me-3 social-i" size="3rem" />
            </a>
          </div>
        </div>
        <div className="col-7 h-100 landing-img"></div>
      </div>
    </div>
  );
}
