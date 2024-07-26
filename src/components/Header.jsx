import React from "react";

const Header = () => {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am Yazan</span>
        </h1>
        <p className="header-subtitle">FRONT-END Developer</p>
        <p className="description">Turning Ideas Into Interactive Reality</p>
      </div>
    </header>
  );
};

export default Header;
