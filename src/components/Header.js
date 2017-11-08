import React, { Component } from 'react';
import '../styles/css/index.css';



// <div className="logo">
//   <h1>{"<CodeScratch />"}</h1>
// </div>

class Header extends Component {
  render() {
    return (
      <div className="banner">
            <h1>{'<CodeScratch />'}</h1>
      </div>

    );
  }
}

export default Header;
