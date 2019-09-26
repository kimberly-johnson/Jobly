import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "login",
      login: "active",
      signUp: ""
    };

    this.setToLogin = this.setToLogin.bind(this);
    this.setToSignUp = this.setToSignUp.bind(this);
  }

  setToLogin() {
    this.setState({
      active: "login",
      login: "active",
      signUp: "inactive"
    });
  }

  setToSignUp() {
    this.setState({
      active: "signUp",
      login: "inactive",
      signUp: "active"
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="card text-center">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <button onClick={this.setToLogin} className={`nav-link ${this.state.login}`}>Login</button>
                </li>
                <li className="nav-item">
                  <button onClick={this.setToSignUp} className={`nav-link ${this.state.signUp}`}>Sign Up</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              {this.state.active === "login" ? <LoginForm logIn={this.props.logIn} getUserData={this.props.getUserData} />
                : <SignUpForm />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;