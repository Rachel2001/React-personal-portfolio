import React from "react";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={{ display: "flex", justifyContent: "center" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "20px",
        }}
      >
        <li>
          <a
            href="#"
            onClick={() => scrollToSection("home")}
            className="nav-link"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => scrollToSection("about")}
            className="nav-link"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => scrollToSection("skills")}
            className="nav-link"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => scrollToSection("projects")}
            className="nav-link"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
