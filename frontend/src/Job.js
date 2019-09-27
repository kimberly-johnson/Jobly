import React from "react";
import JoblyApi from "./JoblyApi";


class Job extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      applied: false
    }

    this.handleApply = this.handleApply.bind(this);
  }

  async handleApply(e) {
    e.preventDefault();
    await JoblyApi.apply(this.props.job.id);
    this.props.changeStatus(this.props.job.id);
  }


  render() {
    console.log('job object', this.props.job);
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

            {this.props.job.state ? <button disabled className='applied btn btn-danger'>APPLIED</button> : <button onClick={this.handleApply} className='apply btn btn-danger'>APPLY</button>}
            
          </div>
        </div>
      </div>
    );
  }
}

export default Job;