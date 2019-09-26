import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Navbar from "./Navbar";
import "./App.css";
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      userData: {}
    }

    this.logUserIn = this.logUserIn.bind(this);
    this.logUserOut = this.logUserOut.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ loggedIn: true });
    }
    else {
      this.setState({ loggedIn: false });
    }
  }

  async logUserIn(data) {
    let token = await JoblyApi.login(data);
    localStorage.setItem('token', JSON.stringify(token));
    this.setState({ loggedIn: true });
  }

  logUserOut() {
    localStorage.clear();
    this.setState({ loggedIn: false });
  }

  async getUserData(username) {
    let userData = await JoblyApi.getUser(username);
    this.setState( {userData: userData})
    localStorage.setItem('userData', JSON.stringify(userData.user));
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar logOut={this.logUserOut} />
        <div className="container">
          <Routes username={this.state.username}
            logIn={this.logUserIn}
            loggedIn={this.state.loggedIn}
            getUserData={this.getUserData} 
            userData={this.state.userData}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
