import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    if (localStorage.getItem('token')) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand btn btn-primary-outline"><NavLink exact to="/">Jobly</NavLink></button>
          <ul className="navbar-nav ml-auto">
            <li><NavLink exact to="/companies">Companies</NavLink></li>
            <li><NavLink exact to="/jobs">Jobs</NavLink></li>
            <li><NavLink exact to="/profile">Profile</NavLink></li>
            <li><span onClick={this.logout}><NavLink exact to="/">Log out</NavLink></span></li>
          </ul>
        </nav>
      );
    }
    else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand btn btn-primary-outline"><NavLink exact to="/">Jobly</NavLink></button>
          <ul className="navbar-nav ml-auto">
            <li><NavLink exact to="/">Log in</NavLink></li>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;