import React, { Component } from 'react';
import Search from './Search.js';
import CodeSnippet from './CodeSnippet.js';


class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <Search />
        <CodeSnippet />
      </div>
    );
  }
}

export default HomePage;
