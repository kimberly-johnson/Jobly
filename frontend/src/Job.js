import React from "react";

class Job extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-header">
            <h5>{this.props.job.title}</h5>
          </div>
          <div className="card-body">
            <p>Salary: {this.props.job.salary}</p>
            <p>Company: {this.props.companyName}</p>
            <p>Equity: {this.props.job.equity}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;