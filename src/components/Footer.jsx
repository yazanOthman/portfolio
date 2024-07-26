import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <p className="mb-0">Copyright 2024 &copy; Yazan Portfolio</p>
        <div className="social-links text-right m-auto ml-sm-auto">
          <a
            href="https://github.com/yazanOthman"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/yazan-othman-b53740b5/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
