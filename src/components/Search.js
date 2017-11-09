// This file goes into homePage.js
import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      searchTerm: null,
    }
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm() {
    this.state{(
      searchTerm:
    )}

  }

  render() {
    return (
      <div className="Search">
        <form name="searchBox" onSubmit={ this.updateSearchTerm }>
          <input
            id="searchKeys"
            placeholder="Search Your Code Snippets"
            onChange={ (evt) => { this.setState({ searchTerm: evt.target.value }); } }
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Search;
