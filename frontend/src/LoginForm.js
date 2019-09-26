import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import JoblyApi from "./JoblyApi";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(e) {
    e.preventDefault();
    let token = await JoblyApi.login(this.state)
    localStorage.setItem('token', JSON.stringify(token));
    if (localStorage.getItem('token')) {
      // window.location.reload();
    }
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
          <form className="" onSubmit={this.handleLogin}>
            <input required className="signUp" onChange={this.handleChange} placeholder="username" type="text" name="username"></input>
            <input required className="signUp" onChange={this.handleChange} placeholder="password" type="text" name="password"></input>
            <button className="btn btn-primary">Log in</button>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;