import React, { Component } from 'react';
import '../styles/css/index.css';



// <div className="logo">
//   <h1>{"<CodeScratch />"}</h1>
// </div>

class Header extends Component {
  render() {
    let name;
    let image;
    if(this.props.currentUser) {
      name =
      <div className="user-info">
        <h3> Hi, {this.props.currentUser.displayName}</h3>
        <img className="navbar-profile-pic" src={this.props.currentUser.photoURL} alt="profile-pic" />
      </div>;
    } else {
      name = "Welcome, come on in!";
    }
    return (
      <div className="banner">
        <div className="logo">
          <h1>{'<CodeScratch />'}</h1>
        </div>
        {name}
      </div>

    );
  }
}

export default Header;
