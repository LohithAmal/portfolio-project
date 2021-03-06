import React from "react";
import resume from "../../src/amalresume.pdf";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p> 24 secord crescent Brampton, Ontario</p>
            </div>
            <div className="d-flex">
              <a href="tel:+1647-326-8901"> +1(647)326-8901 </a>
            </div>
            <div className="d-flex">
              <p> lohith05amal@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav">
                  {" "}
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  className="footer-nav"
                >
                  About Me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="services"
                  offset={-110}
                  className="footer-nav"
                >
                  {" "}
                  Services
                </Link>
                <br />
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="portfolio"
                  className="nav-link"
                  offset={-110}
                  className="footer-nav"
                >
                  portfolio
                </Link>
                <br />
                <a href={resume} className="footer-nav">
                  Resume
                </a>
                <br />
                <Link
                  smooth={true}
                  to="contact"
                  className="nav-link"
                  offset={-110}
                  className="footer-nav"
                >
                  {" "}
                  Contacts
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://github.com/LohithAmal"}
                quote={"Full Stack Developer"}
                hastag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://github.com/LohithAmal"}
                quote={"Full Stack Developer"}
                hastag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://github.com/LohithAmal"}
                quote={"Full Stack Developer"}
                hastag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://github.com/LohithAmal"}
                quote={"Full Stack Developer"}
                hastag="#javascript"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
            </div>
            <p className="pt-3  text-center">
              {" "}
              Copyright &copy; {new Date().getFullYear()}&nbsp; Lohith Amal{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
