import React, { Component } from "react";
import JoblyApi from './JoblyApi';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

 

  render() {

    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input type="text">
          </input>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;