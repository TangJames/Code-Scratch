import React, { Component } from 'react';
import logo_cat from '../logo_cat.png';


// <div className="logo">
//   <h1>{"<CodeScratch />"}</h1>
// </div>

class Header extends Component {
  render() {
    return (
      <div className="banner">
            <img src={logo_cat} alt={'logo'}/>
            <h1>Code Scratch</h1>
          </div>

    );
  }
}

export default Header;
