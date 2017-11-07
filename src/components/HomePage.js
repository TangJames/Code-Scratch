import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js';
import CodeSnippet from './CodeSnippet.js';
import LoginButton from './LoginButton.js';


//<Results currentUser={ this.state.currentUser } /> line: 12
class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
    }
  }

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
      <div>
        <h1>{displayName}</h1>
        <img className="navbar-profile-pic" src={this.props.currentUser.photoURL} alt="" />
      </div>
    );
  } else {
    return <LoginButton />;
  }
  }

  render() {
    return (

      <div className="HomePage">
       { this.getProfileInfo() }
        <Search currentUser={ this.state.currentUser }  />
        <Results currentUser={ this.state.currentUser } />
      </div>
    );
  }
}

export default HomePage;
