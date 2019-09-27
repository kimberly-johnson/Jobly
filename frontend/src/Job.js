import React from "react";
import JoblyApi from "./JoblyApi";


class Job extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleApply = this.handleApply.bind(this);
  }

  //try, catch, error
  async handleApply(e) {
    e.preventDefault();
    await JoblyApi.apply(this.props.job.id);
    this.props.updateApplyStatus(this.props.job.id);
    
  }

  render() {
    const { title, salary, equity, state } = this.props.job;

    return (
      <div>
        <div className="card shadow p-3 mb-5 bg-white rounded">
          <div className="card-header">
            <h5>{title}</h5>
          </div>
          <div className="card-body">
            <p>Salary: {salary}</p>
            <p>Company: {this.props.companyName}</p>
            <p>Equity: {equity}</p>

            {state ?
              <button disabled className='applied btn btn-danger'>APPLIED</button> :
              <button onClick={this.handleApply} className='apply btn btn-danger'>APPLY</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default Job;