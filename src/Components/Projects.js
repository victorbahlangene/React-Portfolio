import React, { Component } from "react";
import weatherAppImg from "../Images/weatherApp.png";
import twitchAppImg from "../Images/twitchApp.png";
import wikipediaAppImg from "../Images/wikipediaApp.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <div id="carousel">
          <div className="slide">
            <a
              href="https://vicsweatherapp.000webhostapp.com/"
              target="blank"
              onmouseover="weather()"
            >
              <img alt={weatherAppImg} id="weatherApp" src={weatherAppImg} />
            </a>
          </div>
          <div className="slide">
            <a
              href="https://wikipedia-viewer.000webhostapp.com/"
              target="blank"
              onmouseover="wikipedia()"
            >
              <img alt={twitchAppImg} id="wikipediaApp" src={twitchAppImg} />
            </a>
          </div>
          <div className="slide">
            <a
              href="https://victortwitchapp.000webhostapp.com/"
              target="blank"
              onmouseover="twitch()"
            >
              <img alt={wikipediaAppImg} id="twitchApp" src={wikipediaAppImg} />
            </a>
          </div>
        </div>

        {/*showing results after hovering */}
        <section id="projectDetail">
          <div className="container">
            <h1 id="demo" />
            <p id="details" />
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
