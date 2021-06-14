import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/UserProfile.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Component } from "react";
import Dashboard from './Dashboard'
import Profile from './Profile'
import Appointments from './Appointments'

class UserProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            dashboard: true,
            appointment: false,
            profile: false,
            isLoggedIn: false
        }

        this.dashboard = this.dashboard.bind(this);
        this.appointment = this.appointment.bind(this);
        this.profile = this.profile.bind(this);
    }

    // componentDidMount() {
    //     fetch("/userProfile")
    //       .then(res => {
    //         console.log("first res :",res);
    //         if (res.status === 200) return res.json();
    //         else throw Error("Couldn't connect to the server");
    //       })
    //       .then(res => {
    //         console.log("res : ", res)
    //         console.log("cookies in front  : ", res)
    //         this.setState({ isLoggedIn: true });
    //       })
    //       .catch(err => {
    //         console.log(err.message);
    //       });
    //   }


    dashboard()
    {
        this.setState({
            dashboard: true,
            appointment: false,
            profile: false
        })
    }

    appointment()
    {
        this.setState({
            dashboard: false,
            appointment: true,
            profile: false
        })
    }

    profile()
    {
        this.setState({
            dashboard: false,
            appointment: false,
            profile: true
        })
    }

    render(){
        return(
            <div class="d-flex" id="wrapper" >
                {/* <!-- Sidebar--> */}
                <div class="border-end bg-white" id="sidebar-wrapper">
                    
                    <div class="list-group list-group-flush">
                        <a  onClick={this.dashboard} class="list-group-item list-group-item-action list-group-item-light p-4" href="#Dashboard">Dashboard</a>
                        <a  onClick={this.appointment} class="list-group-item list-group-item-action list-group-item-light p-4" href="#Appointments">Appointments</a>
                        <a onClick={this.profile}  class="list-group-item list-group-item-action list-group-item-light p-4" href="#Profile">Profile</a>
                    </div>
                </div> 
                <div className="col-sm-10" >
                    {this.state.dashboard && <Dashboard></Dashboard>}
                    {this.state.profile && <Profile></Profile>}
                    {this.state.appointment && <Appointments></Appointments>}
                </div>
                
            </div>
        );
    }
    
  }

export default UserProfile;