import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/DropdownButton'
import "./App.css";
import { theme } from "./Styles/themes/theme";
import LandingPage from "./Components/Landing";
import HomePage from './Components/HomePage';
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import CanadaExamInfo from "./Components/CanadaExamInfo";
import Footer from './Components/Footer'
import Login from './Components/Login'
import RegisterAccount from './Components/RegisterAccount'
import BookAppointment from './Components/BookAppointment'
import UserProfile from './Components/User/UserProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        isLoggedIn: false
    }
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    fetch("/userProfile")
      .then(res => {
        console.log("first res :",res);
        if (res.status === 200) return res.json();
        else throw Error("Couldn't connect to the server");
      })
      .then(res => {
        console.log("res : ", res)
        console.log("cookies in front  : ", res)
        this.setState({ isLoggedIn: true });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  handleLogOut(){
    console.log("in handle logout")
    fetch("/logout")
      .then(res => {
        console.log("logout res i then:",res);
        if (res.status === 200) {
          console.log("cookies in logout  : ", res)
          this.setState({ isLoggedIn: false });
          // return res.json();
        }
        else throw Error("Couldn't connect to the server");
      })
      .catch(err => {
        console.log(err.message);
      });
  }


  render(){

      let loginButton;
      if(this.state.isLoggedIn){
        loginButton = <li className="dropdown" ><Link  className="nav-link  dropbtn" >
          <FontAwesomeIcon className="user-icon" icon={faUserCircle} size="2x"/>
          
          </Link>
                        <div class="dropdown-content">
                          <a href="/userProfile">Profile</a>
                          <a href="/" onClick={this.handleLogOut} >Logout</a>
                        </div>
                      </li>
      }else{
        loginButton = <li ><Link  className="nav-link" to="/login">Login</Link></li>
      }


    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                  <ul className="navbar-nav" >
                      <li ><Link className="nav-link logo" to="/">Dr. Cheema logo</Link></li>
                      <li ><Link className="nav-link" to="/">Home</Link></li>
                      <li ><Link className="nav-link" to="/about">About</Link></li>
                      <li ><Link  className="nav-link" to="/contact">Contact</Link></li>
                  </ul>
                  
                  <ul className="navbar-nav ml-auto">
                    {loginButton}
                  </ul>
          </nav>
          
          {/* <Route path="/CanadaExamInfo" component={CanadaExamInfo} /> */}
          <Route path="/" exact component={HomePage} />
          
          <Route path="/about"  component={About} />
          <Route path="/contact"  component={ContactUs} />
          <Route exact path="/canadaExamInfo"  component={CanadaExamInfo} />
          <Route path="/login"  component={Login} />
          <Route path="/registerAccount"  component={RegisterAccount} />
          <Route path="/bookAppointment"  component={BookAppointment} />
          <Route path="/userProfile"  component={UserProfile} />

          <Route path="/" component={LandingPage} />
          <Footer></Footer>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;