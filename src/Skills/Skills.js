import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills" className="skills-container">
      <div data-aos="zoom-out-up" data-aos-duration="2000">
        <h1>Skills</h1>
        <div class="container text-center">
          <div class="row">
            <div class="col align-self-start">
              <h2>Generative AI</h2>Dive into the future of technology with my
              expertise in Generative AI. Leveraging cutting-edge algorithms and
              machine learning techniques, I explore the realms of creativity
              and innovation. From generating art and music to creating
              realistic simulations, I harness the power of AI to push
              boundaries and unlock new possibilities. With a passion for
              exploration and experimentation, I contribute to this exciting
              field by pushing the boundaries of what's possible and exploring
              the endless possibilities of AI-driven creativity.
            </div>
            <div class="col align-self-center">
              <h2>Front End Developer</h2>As a frontend developer, I craft
              immersive and intuitive user experiences that captivate and engage
              audiences. Armed with a deep understanding of HTML, CSS, and
              JavaScript, I bring designs to life and create seamless
              interactions that delight users. With a keen eye for design and a
              commitment to best practices, I contribute to the frontend
              development community by building accessible, responsive, and
              performance-optimized websites and applications. From responsive
              layouts to complex animations, I thrive on transforming ideas into
              elegant and functional digital experiences.
            </div>
          </div>
        </div>
        <div className="technical-skills-container">
          <div className="technical-skill animate-right" data-aos="animate">
            <i className="fab fa-html5"></i>
            <div className="technical-skills">HTML</div>
          </div>
          <div className="technical-skill animate-right" data-aos="animate">
            <i className="fab fa-css3-alt"></i>
            <div className="technical-skills">CSS</div>
          </div>
          <div className="technical-skill animate-right" data-aos="animate">
            <i className="fab fa-bootstrap"></i>
            <div className="technical-skills">Bootstrap</div>
          </div>
          <div className="technical-skill animate-right" data-aos="animate">
            <i className="fab fa-js"></i>
            <div className="technical-skills">JavaScript</div>
          </div>
          <div className="technical-skill animate-right" data-aos="animate">
            <i className="fab fa-react"></i>
            <div className="technical-skills">React.js</div>
          </div>
          <div className="technical-skill animate-right" data-aos="animate">
            <i className="fab fa-git"></i>
            <div className="technical-skills">Git</div>
          </div>
          <div className="technical-skill animate-right" data-aos="animate">
            <i className="fab fa-github"></i>
            <div className="technical-skills">Github</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
