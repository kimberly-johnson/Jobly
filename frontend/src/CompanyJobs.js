import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import Job from "./Job";

class CompanyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(id) {
    this.setState(st => ({
      jobs: st.jobs.map(job => {
        if (job.id === id) {
          return { ...job, state: 'applied' }
        } else {
          return job;
        }
      })
    }))
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
            <Job key={job.id} companyName={this.state.companyName} job={job} changeStatus={this.changeStatus}/>
          ))}
        </div>
      </div>
    );
  }
}

export default CompanyJobs;