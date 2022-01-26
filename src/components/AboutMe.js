import React from "react";
import Amal from "../me.png";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
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
            Full-stack web developer leveraging Quality Engineering background
            to build and maintain web applications with intuitive user
            experience that keep up with the modernizing technology.
            <br />
            Earned a certificate in full-stack development from University of
            Toronto.
            <br />
            Proved to be innovative problem-solver with a creative and congenial
            personality ready to teamwork, learn and share.
            <br />
            Other than coding I do digital arts, logo designs and other graphic
            designing works.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
