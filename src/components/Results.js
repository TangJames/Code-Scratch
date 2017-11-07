import React, { Component } from 'react';

class Results extends Component {
  constructor(props){
  super(props);

  this.state = {
    currentUser: this.props.currentUser,
    searchResults: null,
  }

  //TODO: CRUD FUNCTION TO GET ALL OF USERS RESULTS
}

  render() {
    return (
      <div className="resultsList">
        <h3>Mockup list of results</h3>
        <ul>
          <li><a href="#">I am a result for the user. </a></li>
          <li><a href="#">I am a result for the user. </a></li>
          <li><a href="#">I am a result for the user. </a></li>
          <li><a href="#">I am a result for the user. </a></li>
        </ul>
      </div>
    );
  }
}

export default Results;
