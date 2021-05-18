import React, { Component } from "react";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import Header from './Header';


class LandingPage extends Component {
  state = {
    welcomeMessage: "Step 1: Run the server and refresh (not running)",
    step: 0
  };

  componentDidMount() {
    fetch("/welcome")
      .then(res => {
        console.log("first res :",res);
        if (res.status === 200) return res.json();
        else throw Error("Couldn't connect to the server");
      })
      .then(res => {
        console.log("res : ", res)
        this.setState({ welcomeMessage: res.welcomeMessage });
        this.incrementStep();
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* {this.state.welcomeMessage} */}
      </div>
    );
  }
}

export default LandingPage;
