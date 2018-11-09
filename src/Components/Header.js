import React from "react";
import { Link } from "react-router-dom";

/* Add .svg file for icons */

const AboutMe = () => {
  return (
    <nav className="navbar navbar-right navbar-expand-sm navbar-light mb-3 py-0">
      <div className="container-fluid">
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/victor-bahlangene-9b406ba3/"
                target="#"
                className="nav-link"
              >
                Linkdin
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://stackoverflow.com/users/9519233/victor-bahlangene"
                target="#"
                className="nav-link"
              >
                StackOverflow
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/victorbahlangene"
                target="#"
                className="nav-link"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/VBahlangene"
                target="#"
                className="nav-link"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AboutMe;
