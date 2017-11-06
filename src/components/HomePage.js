import React, { Component } from 'react';
import Search from './Search.js';
import CodeSnippet from './CodeSnippet.js';


//<Results currentUser={ this.state.currentUser } /> line: 12
class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Search currentUser={ this.state.currentUser }  />

      </div>
    );
  }
}

export default HomePage;
