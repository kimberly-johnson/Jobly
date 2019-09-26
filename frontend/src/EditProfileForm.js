import React, { Component } from "react";
import JoblyApi from './JoblyApi';

class EditProfileForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleEdit(e) {
    e.preventDefault(e);
    let result = await JoblyApi.update(this.state, this.props.username);
    console.log('result is', result);
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="card shadow-sm p-4 mb-5 bg-white rounded text-center">
            <h3 className="card-title align-middle">Edit profile</h3>
            <h5>{this.props.username}</h5>
            <form onSubmit={this.handleEdit}>
              <input className="signUp" onChange={this.handleChange} placeholder="First Name" type="text" name="first_name"></input>
              <input className="signUp" onChange={this.handleChange} placeholder="Last Name" type="text" name="last_name"></input>
              <input className="signUp" onChange={this.handleChange} placeholder="Email" type="text" name="email"></input>
              <input className="signUp" onChange={this.handleChange} placeholder="Image URL" type="text" name="password"></input>
              <input className="signUp" onChange={this.handleChange} placeholder="password" type="text" name="password"></input>
              <button className="btn btn-primary" >Edit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfileForm;