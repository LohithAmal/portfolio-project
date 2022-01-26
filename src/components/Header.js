import React from "react";
import Type from "react-typed";
import resume from "../../src/amalresume.pdf";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Lohith Amal Porfolio</h1>
        <Type
          className="typed-text"
          strings={[
            "Web Designs",
            "Web Development",
            "Logo Designs",
            "Social Media Post",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href={resume} className="btn-main">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
