import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js';
import CodeSnippet from './CodeSnippet.js';
import LogoutButton from './LogoutButton.js';


//<Results currentUser={ this.state.currentUser } /> line: 12
class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
    }
  }

  render() {
    return (
      <div className="HomePage">
        <div>
          <h1>{this.props.currentUser.displayName}</h1>
          <img className="navbar-profile-pic" src={this.props.currentUser.photoURL} alt="" />
          <LogoutButton />
        </div>
        <Search currentUser={ this.state.currentUser }  />
        <Results currentUser={ this.state.currentUser } />
      </div>
    );
  }
}

export default HomePage;
