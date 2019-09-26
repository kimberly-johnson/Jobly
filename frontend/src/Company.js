import React from "react";
import { Link } from "react-router-dom";
import "./Company.css";

class Company extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to={`/companies/${this.props.company.handle}`}
          className="card text-decoration-none shadow p-3 mb-5 bg-white rounded">
          <div className="card-header">
            <h5>{this.props.company.name}</h5>
          </div>
          <div className="card-body">
            <p>{this.props.company.description}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Company;