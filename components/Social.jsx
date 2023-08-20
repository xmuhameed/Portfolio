import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";

export const Social = ({whatsapp}) => {
  return (
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
      {whatsapp && (
        <a href="https://wa.me/+201124246116" target="_blank">
          <BiLogoWhatsapp className="me-3 social-i" size="3rem" />
        </a>
      )}
    </div>
  );
};
