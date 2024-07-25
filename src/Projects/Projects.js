import React, { useEffect } from "react";
import moviePic from "../images/moviepic.png";
import productLandingPage from "../images/productlandingpage.png";
import eCommerceApp from "../images/e-commerceapp.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects" className="project-body">
      <div data-aos="zoom-in" data-aos-duration="2000">
        <h1 className="header">Projects</h1>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12">
              <div className="project-item">
                <div className="project-image-container">
                  <img src={moviePic} alt="My Image" className="img-fluid" />
                  <div className="project-overlay">
                    <p className="paragraph-with-icons">
                      A web application for searching and browsing movies.
                      <br />
                      <span>
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-bootstrap"></i>
                        <i className="fab fa-js"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <p className="project-name">Movie App </p>
                <a
                  href="https://github.com/Rachel2001/movie-website"
                  target="_blank"
                  className="project-button"
                >
                  GitHub
                </a>
                <a
                  href="https://movie-website-2c5e44.netlify.app/"
                  target="_blank"
                  className="project-button"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="project-item">
                <div className="project-image-container">
                  <img
                    src={productLandingPage}
                    alt="My Image"
                    className="img-fluid"
                  />
                  <div className="project-overlay">
                    <p className="paragraph-with-icons">
                      A landing page for a restaurant.
                      <br />
                      <span>
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-bootstrap"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <p className="project-name">Restaurant Landing Page </p>
                <a
                  href="https://github.com/Rachel2001/CODSOFT-Task-1"
                  target="_blank"
                  className="project-button"
                >
                  GitHub
                </a>
                <a
                  href="https://gilded-melba-51a459.netlify.app/"
                  target="_blank"
                  className="project-button"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="project-item">
                <div className="project-image-container">
                  <img
                    src={eCommerceApp}
                    alt="My Image"
                    className="img-fluid"
                  />
                  <div className="project-overlay">
                    <p className="paragraph-with-icons">
                      A app for farmers and consumers.
                      <br />
                      <span>
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                        <i className="fab fa-bootstrap"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <p className="project-name">E-Commerce App (Internship)</p>
                <a
                  href="https://github.com/InternPulse/farmdine-frontend"
                  target="_blank"
                  className="project-button"
                >
                  GitHub
                </a>
                <a
                  href="https://farmdine-frontend.vercel.app/"
                  target="_blank"
                  className="project-button"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
