import React, { useState } from "react";
import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Logout from "./Logout";
export default class Home extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("user-info");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <div>this is Home Page</div>
        <Link to="/logout">{}</Link>
        <Logout />
      </>
    );
  }
}
