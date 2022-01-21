import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArtstation,
  faDrupal,
  faFirefox,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5"> My Services </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {/* <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /> */}
              </div>
              <h3>Web Development</h3>
              <p>
                I work closely with my clients to make there ideas into reality.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {/* <FontAwesomeIcon className="icon" icon={faDrupal} size="2x" /> */}
              </div>
              <h3>Logo Designs</h3>
              <p>
                I design and build your company logo that identify will your
                product and also convey story to the users.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                {/* <FontAwesomeIcon className="icon" icon={faFirefox} size="2x" /> */}
              </div>
              <h3>Graphic designs</h3>
              <p>
                I design social media advertisements, banners, flyers and
                business cards.
              </p>
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
              <h3>Digital Arts</h3>
              <p>I make your digital drawings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
