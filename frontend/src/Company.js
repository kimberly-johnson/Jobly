import React, { Component } from "react";
import './company.css';
import { Link } from 'react-router-dom';

//pure
class Company
  extends Component {
  render() {
    return (
      <div>
        <Link to={`/companies/${this.props.company.handle}`}>
          <div className="company-card">
            <h5>{this.props.company.name}</h5>
            <p>{this.props.company.description}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Company
  ;