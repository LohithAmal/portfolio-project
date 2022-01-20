import React from "react";
import Amal from "../me.png";

const AboutMe = () => {
  return (
    <div id="about-me" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap">
            <div className="photo-wrap mb-5">
              <img
                className="profile-img"
                src={Amal}
                alt="amal lohith avatar"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="heading">
            ABOUT ME <hr />
          </h1>
          <p className="para">
            A web developer successfully completed full stack web development
            bootcamp from University of Toronto School of Continuing Studies. My
            objective is to develop efficient and engaging web applications to
            contribute the technology industry. I am a quality person who
            dedicated to continuously research and study to sharpen skills and
            knowledge therefore I am confident that I can switch to any stack or
            technology easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
