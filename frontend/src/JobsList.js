import React, { Component } from "react";
import JoblyApi from './JoblyApi';
import Job from "./Job";

class JobsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs });
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
        JobsList
        <form onSubmit={this.handleSearch}>
          <input onChange={this.handleChange} name="search" type="text">
          </input>
          <button>Search</button>
        </form>
        {this.state.jobs.map(job => (
          <Job key={job.id} job={job} companyName={job.company_handle} />
        ))}
      </div>
    );
  }
}

export default JobsList;