import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from "./Styles/themes/theme";
import LandingPage from "./Components/Landing";
import HomePage from './Components/HomePage';
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import CanadaExamInfo from "./Components/CanadaExamInfo";
import Footer from './Components/Footer'

import "./App.css";


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav" >
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-item"><Link  className="nav-link" to="/contact">Contact</Link></li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                </ul>
        </nav>
        
        {/* <Route path="/CanadaExamInfo" component={CanadaExamInfo} /> */}
        <Route path="/" exact component={HomePage} />
        
        <Route path="/about"  component={About} />
        <Route path="/contact"  component={ContactUs} />
        <Route path="/canadaExamInfo"  component={CanadaExamInfo} />

        <Route path="/" component={LandingPage} />
        <Footer></Footer>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
