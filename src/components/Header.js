import React from "react";
import Type from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
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
        <a href="#" className="btn-main">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
