import React, { Component } from "react";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Font awesome for the social media icons  //
/* Add svg files */

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
