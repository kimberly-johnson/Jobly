import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import CompaniesList from "./CompaniesList";
import CompanyJobs from "./CompanyJobs";
import JobsList from "./JobsList";
import Profile from "./Profile";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/companies" render={() => <CompaniesList />} />
        <Route exact path="/companies/:handle" render={() => <CompanyJobs />} />
        <Route exact path="/jobs" render={() => <JobsList />} />
        <Route exact path="/profile" render={() => <Profile />} />
      </Switch>
    );
  }
}

export default Routes;