import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import personalPic from "../images/personalpic.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="about" className="background-container">
      <div data-aos="fade-down-right" data-aos-duration="2000">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center text-lg-start">
              <h1>About Me</h1>
              <p>
                I am a self-taught Frontend Developer with a solid foundation
                developed through the SheCodes Bootcamp, which I started in May
                of the previous year. My journey has included studying Criminal
                Psychology and teaching English virtually, but my true passion
                lies in technology. I have recently earned a Generative AI
                certificate and I am currently enhancing my skills through the
                Software Engineering (SE) Fellowship. Additionally, I completed
                an internship this year, further honing my expertise in Frontend
                Development.
              </p>
              <a
                href="https://github.com/"
                className="projects"
                target="_blank"
              >
                Projects
              </a>
            </div>
            <div className="col text-center">
              <div className="animated-border">
                <img src={personalPic} alt="Racheline Mouyana Picture" className="picture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
