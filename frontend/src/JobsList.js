import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import Job from "./Job";

class JobsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs });
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

  async handleSearch(e) {
    e.preventDefault();
    let result = await JoblyApi.searchJobs(this.state.search);
    if (result) {
      this.setState({ jobs: result.jobs });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>These jobs are available!</h2>
        <br></br>
        <form onSubmit={this.handleSearch} className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <input onChange={this.handleChange}
              name="search"
              type="text"
              className="form-control">
            </input>
          </div>
          <button type="submit" className="btn btn-outline-secondary">Search</button>
        </form>
        <br></br>
        {this.state.jobs.map(job => (
          <Job key={job.id} job={job} companyName={job.company_handle} changeStatus={this.changeStatus} />
        ))}
      </div>
    );
  }
}

export default JobsList;