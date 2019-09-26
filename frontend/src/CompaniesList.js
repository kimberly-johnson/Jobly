import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import Company from "./Company";
import "./CompaniesList.css"

class CompaniesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companies: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    let companies = await JoblyApi.getCompanies();
    this.setState({ companies });
  }

  async handleSearch(e) {
    e.preventDefault();
    let result = await JoblyApi.searchCompany(this.state.search);
    if (result) {
      this.setState({ companies: result.companies });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>These companies are hiring!</h2>
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
        {this.state.companies.map(company => (
          <Company key={company.handle} company={company} />
        ))}
      </div>
    );
  }
}

export default CompaniesList;