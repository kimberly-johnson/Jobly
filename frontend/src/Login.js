import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

class Login extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <SignUpForm />
      </div>
    );
  }
}

export default Login;