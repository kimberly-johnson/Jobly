import React, { Component } from "react";
import EditProfileForm from "./EditProfileForm";

class Profile extends Component {
  render() {
    return (
      <div>
        <EditProfileForm username={this.props.username}/>
      </div>
    );
  }
}

export default Profile;