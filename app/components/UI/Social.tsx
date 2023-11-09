import {
    BiLogoGithub,
    BiLogoLinkedinSquare,
    BiLogoFacebook,
    BiLogoInstagram,
    BiLogoTwitter,
    BiLogoWhatsapp,
  } from "react-icons/bi";
  
  export const Social = ({}) => {
    return (
      <div className="flex md:flex-row flex-col text-altColor dark:text-altDark max-[400px]:gap-3 w-fit relative">
        <a href="https://www.instagram.com/xmuhameed" target="_blank" className="socialIHover">
          <BiLogoInstagram className="me-3 social-i" size="3rem" />
        </a>
        <a href="https://www.facebook.com/xmuhameed" target="_blank" className="socialIHover">
          <BiLogoFacebook className="me-3 social-i" size="3rem" />
        </a>
        <a href="https://twitter.com/xmuhameed" target="_blank" className="socialIHover">
          <BiLogoTwitter className="me-3 social-i" size="3rem" />
        </a>
        <a href="https://www.linkedin.com/in/xmuhameed" target="_blank" className="socialIHover">
          <BiLogoLinkedinSquare className="me-3 social-i" size="3rem" />
        </a>
        <a href="https://github.com/xmuhameed" target="_blank" className="socialIHover">
          <BiLogoGithub className="me-3 social-i" size="3rem" />
        </a>
        {/* { (
          <a href="https://wa.me/+201124246116" target="_blank">
            <BiLogoWhatsapp className="me-3 social-i" size="3rem" />
          </a>
        )} */}
      </div>
    );
  };
  