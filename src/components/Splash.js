import React, { Component } from 'react';
import logo_cat from '../logo_cat.png';
import LoginButton from './LoginButton.js';

class Splash extends Component {

  getProfileInfo() {
    if (this.props.currentUser) {
      // user is logged in
      let displayName;
      if (this.props.currentUser.displayName && this.props.currentUser.displayName.length > 0) {
        displayName = this.props.currentUser.displayName;
      } else {
        displayName = this.props.currentUser.email;
      }
      return (
        <div className="login">
          <h1>{displayName}</h1>
          <img className="navbar-profile-pic" src={this.props.currentUser.photoURL} alt="" />
        </div>
      );
    } else {
      // user is not logged in
      return <LoginButton>Log in with GitHub</LoginButton>;
    }
  }

  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
      <div className="logo-header">
        <header> Code Scratch </header>
        <img src={logo_cat} className="App-logo" alt="logo" />
        { this.getProfileInfo() }
      </div>
    )
  }
}

export default Splash;
