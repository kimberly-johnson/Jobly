import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    if (localStorage.getItem('token')) {
      return (
        <Redirect to="/companies" />
      );
    }

    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="card shadow-sm p-4 mb-5 bg-white rounded text-center">
            <h1 className="card-title align-middle">Jobly</h1>
            <p className="card-text align-middle">All the jobs in one, convenient place.</p>
            <Link to="/login"> <button className="login btn btn-primary">Login</button> </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;