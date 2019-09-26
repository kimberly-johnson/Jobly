import React, { Component } from "react";
import JoblyApi from './JoblyApi';

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      updatedMsg: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e) {
    this.setState(st => (
      { formData: { ...st.formData, [e.target.name]: e.target.value }} 
    ));
  }

  async handleEdit(e) {
    e.preventDefault(e);
    let username = JSON.parse(localStorage.getItem('userData')).username;
    await JoblyApi.update(this.state.formData, username);
    this.setState({ updatedMsg: true });
    this.props.getUserData(username)
  }

  render() {
    let {username, first_name, last_name, email, photo_url} = JSON.parse(localStorage.getItem('userData'));

    return (
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="card shadow-sm p-4 mb-5 bg-white rounded text-center">
            <h3 className="card-title align-middle">Edit profile</h3>
            <h5>{username}</h5>
            <form onSubmit={this.handleEdit}>
              <input className="signUp" onChange={this.handleChange} placeholder={first_name || "first name"} type="text" name="first_name"></input>
              <input className="signUp" onChange={this.handleChange} placeholder={last_name || "last name"} type="text" name="last_name"></input>
              <input className="signUp" onChange={this.handleChange} placeholder={email || "email"} type="text" name="email"></input>
              <input className="signUp" onChange={this.handleChange} placeholder={photo_url || "Image URL"} type="text" name="password"></input>
              <input className="signUp" onChange={this.handleChange} placeholder="password" type="text" name="password"></input>
              {this.state.updatedMsg ? <div className="alert alert-success">User info updated successfully!</div>: null}
              <button className="btn btn-primary" >Edit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfileForm;