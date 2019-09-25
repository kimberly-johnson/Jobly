import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar">
          <li><NavLink exact to="/">Jobly</NavLink></li>
          <li><NavLink exact to="/companies">Companies</NavLink></li>
          <li><NavLink exact to="/jobs">Jobs</NavLink></li>
          <li><NavLink exact to="/profile">Profile</NavLink></li>
          <li><NavLink exact to="/">Log out</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;