import React, { Component } from "react";
import JoblyApi from './JoblyApi';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  render() {

    return (
      <div className="input-group mb-3">
        <form onSubmit={this.handleSearch}>
          <input type="text" className="form-control" aria-label="company search" aria-describedby="button-addon2">
          </input>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;