// This file goes into homePage.js
import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      searchKeyword: null,
    }
  }

  render() {
    return (
      <div className="Search">
        <form name="searchBox">
          <input id="searchKeys" placeholder="Search Your Code Snippets" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
