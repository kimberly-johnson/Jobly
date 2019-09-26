import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import Job from "./Job";

class CompanyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getCompanyJobs(this.props.match.params.handle);
    this.setState({
      jobs: jobs.company.jobs,
      companyName: jobs.company.name,
      companyDescription: jobs.company.description
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.companyName}</h2>
        <p>{this.state.companyDescription}</p>
        <div>
          {this.state.jobs.map(job => (
            <Job key={job.id} companyName={this.state.companyName} job={job} />
          ))}
        </div>
      </div>
    );
  }
}

export default CompanyJobs;