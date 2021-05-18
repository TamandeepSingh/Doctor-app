import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import About from './About'
import ContactUs from './ContactUs'
import '../Styles/Header.css'

function Header() {
    return (
      <div className="background" >
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* <!-- Brand --> */}
        {/* <a className="navbar-brand" href="#">Logo</a> */}

        {/* <!-- Links --> */}
        {/* <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Location</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact us</a>
            </li>
        </ul>

        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Login</a>
            </li>
        </ul> */}
        
        <Router>
            <main>
            <nav>
                <ul className="navbar-nav" >
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link  className="nav-link" to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* <Route path="/" exact component={HomePage} />
            <Route path="/about"  component={About} />
            <Route path="/contact"  component={ContactUs} /> */}

            </main>
        </Router>

        </nav>
      </div>
    );
  }

export default Header;