import React, { Component } from "react";

//pure
class Job extends Component {
  render() {
    return (
      <div>
        <div className="company-card">
          <h5>{this.props.job.title}</h5>
          <p>Salary: {this.props.job.salary}</p>
          <p>Company: {this.props.companyName}</p>
          <p>Equity: {this.props.job.equity}</p>
        </div>
      </div>
    );
  }
}

export default Job;