import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(e) {
    e.preventDefault();
    let token = await JoblyApi.login(this.state)
    localStorage.setItem('token', JSON.stringify(token));
    if (localStorage.getItem('token')) {
      window.location.reload();
    }
    console.log('localstorage', localStorage.getItem('token'));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {

    if (localStorage.getItem('token')) {
      return (
        <div>
          <Redirect to='/'></Redirect>
        </div>
      )
    }
    else {
      return (
        <div>
          <p>Login Form</p>
          <form onSubmit={this.handleLogin}>
            <input onChange={this.handleChange} placeholder="username" type="text" name="username"></input>
            <input onChange={this.handleChange} placeholder="password" type="text" name="password"></input>
            <button>Log in</button>
          </form>
        </div>
      );
    }
  }
}

export default LoginForm;