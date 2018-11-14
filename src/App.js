import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router /*,Route, Switch*/ } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div style={body} className="container">
          <Header />
          {/* <AboutMe /> 
          <Projects /> 
          <Contact />*/}
          <AboutMe />
          <Footer />
        </div>
      </Router>
    );
  }
}
const body = {
  fontSize: "15px",
  lineHeight: "1.5",
  fontfamily: "Arial, Helvetica, sans-serif",
  padding: "0",
  margin: "0",
  backgroundColor: "#f4f4f4",
  width: "100%"
};

export default App;
