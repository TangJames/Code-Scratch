import React, { Component } from 'react';
import { auth } from '../utils/firebase';

class LogoutButton extends Component {
  handleClick(evt) {
    evt.preventDefault();
    auth.signOut();
  }

  render() {
    return (
      <div className="logoutButton">

        <button onClick={ this.handleClick } className="btn-logout btn btn-primary">
          { this.props.children || 'Log Out of Github Yo' }
        </button>

      </div>



    )
  }
}

export default LogoutButton;
