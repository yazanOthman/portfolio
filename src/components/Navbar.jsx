import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 96);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`custom-navbar ${scroll && "affix"}`}>
      <div className="container">
        <a className="logo" href="/">
          Web Dev
        </a>
        <ul className={`nav ${isOpen && "show"}`}>
          <li className="item">
            <a className="link" href="#home">
              Home
            </a>
          </li>
          <li className="item">
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li className="item">
            <a className="link" href="#experience">
              experiences
            </a>
          </li>
          <li className="item">
            <a className="link" href="#stack">
              stack
            </a>
          </li>
          <li className="item">
            <a className="link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="item">
            <a className="link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <button
          id="nav-toggle"
          className={`hamburger hamburger--elastic ${isOpen && "is-active"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
