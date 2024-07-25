import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [nameText, setNameText] = useState("");
  const [professionText, setProfessionText] = useState("");

  useEffect(() => {
    const nameArray = "Racheline Mouyana".split("");
    const professionArray = "Front End Developer".split("");

    let nameIndex = 0;
    let professionIndex = 0;

    const typeWriter = (textArray, setTextState, delay) => {
      const intervalId = setInterval(() => {
        if (textArray.length > nameIndex) {
          setTextState(textArray.slice(0, nameIndex + 1).join(""));
          nameIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 500);
      return intervalId;
    };

    const nameIntervalId = typeWriter(nameArray, setNameText, 0);

    const professionIntervalId = setTimeout(() => {
      typeWriter(professionArray, setProfessionText, 0);
    }, 8000);

    return () => {
      clearInterval(nameIntervalId);
      clearTimeout(professionIntervalId);
    };
  }, []);

  return (
    <div id="home" className="headings">
      <div data-aos="fade-right" data-aos-duration="2000">
        <h1>Hello! My name is</h1>
        <h2>{nameText}</h2>
        <h3>{professionText}</h3>
        <div className="button-container">
          <a
            href="file:///C:/Users/Dell/Desktop/react-personal-portfolio/racheline-mouyana-cv.pdf"
            className="resume-button"
            target="_blank"
          >
            Resume/CV
          </a>
          <a
            href="mailto:rachelinemouyana21@gmail.com"
            className="contact-button"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
