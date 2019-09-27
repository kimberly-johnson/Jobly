import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      companyActive: '',
      jobsActive: '',
      profileActive: ''
    }

    this.handleCurrent = this.handleCurrent.bind(this);
  }

  handleCurrent(e) {
    console.log(e.target.href);
    if (e.target.href.includes('jobs')) {
      this.setState({
        companyActive: '',
        jobsActive: 'current',
        profileActive: ''
      })
    }
    else if (e.target.href.includes('companies')) {
      this.setState({
        companyActive: 'current',
        jobsActive: '',
        profileActive: ''
      })
    }
    else if (e.target.href.includes('profile')) {
      this.setState({
        companyActive: '',
        jobsActive: '',
        profileActive: 'current'
      })
    }
  }

  render() {
    if (localStorage.getItem('token')) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand btn btn-primary-outline"><NavLink onClick={this.handleCurrent} exact to="/companies">Jobly</NavLink></button>
          <ul className="navbar-nav ml-auto">
            <li><NavLink onClick={this.handleCurrent} className={this.state.companyActive} exact to="/companies">Companies</NavLink></li>
            <li><NavLink onClick={this.handleCurrent} className={this.state.jobsActive} exact to="/jobs">Jobs</NavLink></li>
            <li><NavLink onClick={this.handleCurrent} className={this.state.profileActive} exact to="/profile">Profile</NavLink></li>
            <li><span onClick={this.props.logOut}><NavLink exact to="/">Log out</NavLink></span></li>
          </ul>
        </nav>
      );
    }
    else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand btn btn-primary-outline"><NavLink exact to="/">Jobly</NavLink></button>
          <ul className="navbar-nav ml-auto">
            <li><NavLink exact to="/login">Log in</NavLink></li>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;