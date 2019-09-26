import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import "./SignUpForm.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSignUp(e) {
    e.preventDefault();
    let token = await JoblyApi.signUp(this.state)
    localStorage.setItem('token', JSON.stringify(token));
    if (localStorage.getItem('token')) {
      window.location.reload();
    }
    console.log('localstorage', localStorage.getItem('token'));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    if (localStorage.getItem('token')) {
      return (
        <div>
          <Redirect to='/companies'></Redirect>
        </div>
      );
    }
    else {
      return (
        <div>
          <form onSubmit={this.handleSignUp}>
            <input className="signUp" onChange={this.handleChange} placeholder="username" type="text" name="username"></input>
            <input className="signUp" onChange={this.handleChange} placeholder="password" type="text" name="password"></input>
            <input className="signUp" onChange={this.handleChange} placeholder="First Name" type="text" name="first_name"></input>
            <input className="signUp" onChange={this.handleChange} placeholder="Last Name" type="text" name="last_name"></input>
            <input className="signUp" onChange={this.handleChange} placeholder="Email" type="text" name="email"></input>
            <button className="btn btn-primary" >Sign Up</button>
          </form>
        </div>
      );
    }
  }
}

export default SignUpForm;