import React, { Component } from "react";
import JoblyApi from './JoblyApi';
import Company from './Company';

class CompaniesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companies: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    this.setState({ companies })
  }

  async handleSearch(e) {
    e.preventDefault();
    let result = await JoblyApi.searchCompany(this.state.search);
    if (result) {
      this.setState({ companies: result.companies })
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        CompaniesList
        <form onSubmit={this.handleSearch}>
          <input onChange={this.handleChange} name="search" type="text">
          </input>
          <button>Search</button>
        </form>
        {this.state.companies.map(company => (
          <Company key={company.handle} company={company} />
        ))}
      </div>
    );
  }
}

export default CompaniesList;