import React, { Component } from 'react';


// <div className="logo">
//   <h1>{"<CodeScratch />"}</h1>
// </div>

class Header extends Component {
  render() {
    return (
      <div className="banner">
        <div className="cat-logo">
          <div class="cat">
          <span class="eyes left"></span>
          <span class="eyes right"></span>
          <span class="mouth"></span>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
