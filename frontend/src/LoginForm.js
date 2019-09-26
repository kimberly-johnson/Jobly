import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault(e);
    this.props.logIn(this.state);
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