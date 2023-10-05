import React,{ useState } from "react";
import "./footer.css";
import DownloadButton from "./DownloadButton";
import GitHubLink from "./GitHubLink";
import LinkedInImage from "./LinkedInImage";
import Phone from "./Phone";

const Footer = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  return (
    <>
      <DownloadButton />
      <div className="outer-container">
        <p className="p1">Get in touch ☺</p>
        <div className="social-container">
          <GitHubLink />
          <LinkedInImage />
          <div
            className="phone-icon"
            onMouseEnter={() => setShowPhoneNumber(true)}
            onMouseLeave={() => setShowPhoneNumber(false)}
          >
            <Phone />
            {showPhoneNumber && (
              <div className="phone-number">+96170605255</div>
            )}
          </div>
        </div>
        <p className="p2">
          Copyright &copy; 2023 All rights reserved Developed by AUF students
        </p>
      </div>
    </>
  );
};

export default Footer;


