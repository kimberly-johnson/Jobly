import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import Job from "./Job";

class CompanyJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };

    this.updateApplyStatus = this.updateApplyStatus.bind(this);
  }
  
  async componentDidMount() {
    const res = await JoblyApi.getCompanyJobs(this.props.match.params.handle);
    const { jobs, name, description } = res.company

    this.setState({
      jobs,
      companyName: name,
      companyDescription: description
    });
  }

  updateApplyStatus(id) {
    this.setState(st => ({
      jobs: st.jobs.map(job => {
        return job.id === id ? { ...job, state: 'applied' } : job;
      })
    }));
  }

  render() {
    const { companyName, companyDescription, jobs } = this.state;

    return (
      <div>
        <h2>{companyName}</h2>
        <p>{companyDescription}</p>
        <div>
          {jobs.map(job => (
            <Job
              key={job.id}
              companyName={companyName}
              job={job}
              updateApplyStatus={this.updateApplyStatus} />
          ))}
        </div>
      </div>
    );
  }
}

export default CompanyJobs;