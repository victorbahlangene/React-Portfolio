import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import logo from "../Images/logo.png";

/* Add drop down menu when nabar is small */

const Header = () => {
  return (
    <nav className="navbar navbar-right navbar-expand-sm navbar-light mb-3 py-0">
      <div className="container-fluid">
        <div>
          {/*   
        <ul className="navbar mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                <img id="logo" style={logCss} src={logo} alt={logo} />
              </Link>
            </li>
          </ul>
  */}
          <ul id="top-links" className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />

                <img id="logo" style={logCss} src={logo} alt={logo} />
              </Link>
            </li>

            <li className="nav-item">
              <Link style={textColor} to="/" className="nav-link">
                <i className="fas fa-home" />
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link style={textColor} to="/" className="nav-link">
                <i className="fas fa-home" />
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link style={textColor} to="/" className="nav-link">
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
                <SocialIcon
                  id="icon"
                  className="nav-item"
                  url="https://www.linkedin.com/"
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://stackoverflow.com/users/9519233/victor-bahlangene"
                target="#"
                className="nav-link"
              >
                <SocialIcon
                  id="icon"
                  className="nav-item"
                  url="https://stackoverflow.com/jaketrent"
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/victorbahlangene"
                target="#"
                className="nav-link"
              >
                <SocialIcon
                  id="icon"
                  className="nav-item"
                  url="https://github.com/"
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://twitter.com/VBahlangene"
                target="#"
                className="nav-link"
              >
                <SocialIcon
                  id="icon"
                  className="nav-item"
                  url="https://twitter.com/jaketrent"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const logCss = {
  padding: "0 10px 0 0",
  margin: "0",
  width: "90px"
};

const textColor = {
  color: "white"
};

export default Header;
