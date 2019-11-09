import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/homeComponent";
import About from "./components/aboutComponent";
import Account from "./components/accountComponent";
import Survey from "./components/surveyComponent";


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
                  <Link to="/account" className="nav-link">Create Account </Link>
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
        <Route path="/account" exact component={Account}/>
        <Route path="/survey" exact component={Survey}/>
      </Router>
     
    );
  }
}
export default App;
