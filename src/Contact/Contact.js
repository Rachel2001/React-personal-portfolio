import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submission started");

    try {
      const response = await axios.post("/submit-form", {
        name,
        email,
        message,
      });

      console.log("Response from server:", response.data);

      setName("");
      setEmail("");
      setMessage("");

      alert("Thank you! Will be in contact soon");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="contact" className="contact-page">
      <div data-aos="flip-up" data-aos-duration="2000">
        <div className="contact-container text-center">
          <div className="row justify-content-around">
            <div className="col-12 col-md-4">
              <h1>Lets Connect!</h1>
              <div className="social-media-icons">
                <a
                  href="https://www.linkedin.com/in/racheline-mouyana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/racheline_mouyana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="mailto:rachelinemouyana21@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="contact-form">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
