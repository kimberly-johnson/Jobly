import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CompaniesList from "./CompaniesList";
import CompanyJobs from "./CompanyJobs";
import JobsList from "./JobsList";
import Profile from "./Profile";

class Routes extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    if (this.props.loggedIn === true) {
      return (
        <Switch>
          <Route exact path="/login" render={() => <Login logIn={this.props.logIn} getUserData={this.props.getUserData} />} />
          <Route exact path="/companies" render={() => <CompaniesList />} />
          <Route exact path="/companies/:handle" render={rtProps => <CompanyJobs {...rtProps} />} />
          <Route exact path="/jobs" render={() => <JobsList />} />
          <Route exact path="/profile" render={() => <Profile username={this.props.username} getUserData={this.props.getUserData}/>} />
          <Route exact path="/" render={() => <Home />} />
        </Switch>
      );
    }

    else {
      return (
        <Switch>
          <Route exact path="/login" render={() => <Login logIn={this.props.logIn} getUserData={this.props.getUserData} />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      );
    }


  }
}

export default Routes;