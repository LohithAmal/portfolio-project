import React from "react";
import Squid from "../squid.jpg";
import Squidb from "../squid-1.jpg";
import Covid from "../covid.jpg";
import Smile from "../smile.jpg";
import Pwa from "../pwa.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// pop-up box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Portfolio = () => {
  //squid store
  const openPopupboxSmile = () => {
    const content = (
      <>
        <img className="portfolio-image-popup" src={Smile} alt="Smile app " />
        <p>
          Work Place Wellness app created for recording employee emotions,
          application build using technologies html5, css3, JavaScript, MySQL,
          Express.js, Node.js.
        </p>
        <b>Heroku:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://work-feelings.herokuapp.com/")}
        >
          https://work-feelings.herokuapp.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigSmile = {
    titleBar: {
      enable: true,
      text: "Work Emotion App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // smile app popup efect >>>>>>>>>>>>>
  const openPopupboxSquid = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={Squidb}
          alt="squid store e-commerce"
        />

        <p>
          Ecommerce application build using MERN stack, MongoDB back end, a
          GraphQL API, and an Express.js and Node.js server
        </p>
        <b>Heroku:</b>
        <a
          className="hyper-link"
          onClick={() => window.open("https://thesquidstore.herokuapp.com/")}
        >
          https://thesquidstore.herokuapp.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigSquid = {
    titleBar: {
      enable: true,
      text: "Squid Game Store ",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // covid live news popup box >>>>>>>>>>>>>>>>>>>>>>

  const openPopupboxCovid = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popup"
          src={Covid}
          alt="Covid live update"
        />
        <p>
          Live Update on Covid News build using html5, css3, JavaScript, AJAX,
          restful API’s
        </p>
        <b>Github:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/BootcampProject/Group5-COVID-Coders"
            )
          }
        >
          https://github.com/BootcampProject/Group5-COVID-Coders
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCovid = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // pwa >>>>>>>>>>>>>>>>>>>>>

  const openPopupboxPwa = () => {
    const content = (
      <>
        <img className="portfolio-image-popup" src={Pwa} alt="Pwa app" />
        <p>
          This is a budget tracker build as a progressive web applicatio (PWA).
        </p>
        <b>GitHub:</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/LohithAmal/PWA-BUDGET-TRACKER")
          }
        >
          https://github.com/LohithAmal/PWA-BUDGET-TRACKER
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPwa = {
    titleBar: {
      enable: true,
      text: "",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5"> Portfolio</h1>
        {/* squid store portfolio ----------------- */}
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxSquid}>
            <img className="portfolio-image" src={Squid} alt="squid store" />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
          {/* squid store portfolio ----------------- */}
          <div className="portfolio-image-box" onClick={openPopupboxSmile}>
            <img
              className="portfolio-image"
              src={Smile}
              alt="Smile App imaGE"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
          {/*  COVID LIVE NEWS*/}
          <div className="portfolio-image-box" onClick={openPopupboxCovid}>
            <img className="portfolio-image" src={Covid} alt="Covid live" />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
          {/* Pwa application */}
          <div className="portfolio-image-box" onClick={openPopupboxPwa}>
            <img className="portfolio-image" src={Pwa} alt="PWA app" />
            <div className="overflow"></div>
            <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon" />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigSquid} />
      <PopupboxContainer {...popupboxConfigSmile} />
      <PopupboxContainer {...popupboxConfigCovid} />
    </div>
  );
};

export default Portfolio;
