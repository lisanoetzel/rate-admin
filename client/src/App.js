import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Login from "./components/pages/login";
import Survey from "./components/pages/survey";

import logo from "./RMA logo2.jpg";


class App extends Component {
  render() {
    return (
      <Router>
         <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <img src={logo} width="30" height="30" alt="RateMyAdmin Logo" />
              <Link to="/" className="navbar-brand"><strong>Rate My Administrator</strong></Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                  <Link to="/about" className="nav-link">About </Link>
                  </li>
                  <li className="nav-item active">
                  <Link to="/login" className="nav-link">Login </Link>
                  </li>
                  <li className="nav-item active">
                  <Link to="/survey" className="nav-link">Survey</Link>
                  </li>
                </ul>
              </div>
            </nav>
        </div>

        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/survey" exact component={Survey}/>
      </Router>
     
    );
  }
}
export default App;
