import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArtstation,
//   faDrupal,
//   faFirefox,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5"> My Services </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {/* <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /> */}
              </div>
              <a
                className="service-link"
                href="https://drive.google.com/drive/folders/1AyEvQqMwNpHFnNk9AjACkN6vsMcchJl7"
                target="_blank"
              >
                <h3>Web Development</h3>
                <p>
                  I work closely with my clients to make there ideas into
                  reality.
                </p>
              </a>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {/* <FontAwesomeIcon className="icon" icon={faDrupal} size="2x" /> */}
              </div>
              <a
                href="https://drive.google.com/drive/folders/1wB6X-ayhh4kXMQddGUXnUrHPj2LV1xU7"
                className="service-link"
                target="_blank"
              >
                <h3>Logo Designs</h3>
                <p>
                  I design and build your company logo that identify will your
                  product and also convey story to the users.
                </p>
              </a>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {/* <FontAwesomeIcon className="icon" icon={faFirefox} size="2x" /> */}
              </div>
              <a
                href="https://drive.google.com/drive/folders/1jB60peWkhQasWJvpG7ReMCdVsogAb-J_"
                className="service-link"
                target="_blank"
              >
                <h3>Graphic designs</h3>
                <p>
                  I design social media advertisements, banners, flyers and
                  business cards.
                </p>
              </a>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {/* <FontAwesomeIcon
                  className="icon"
                  icon={faArtstation}
                  size="2x"
                /> */}
              </div>
              <a
                href="https://drive.google.com/drive/folders/1vGd1PhWqiGqBzouR-2fCD2HOzrZ7nN_I"
                className="service-link"
                target="_blank"
              >
                <h3>Digital Arts</h3>
                <p>I make your digital drawings.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
