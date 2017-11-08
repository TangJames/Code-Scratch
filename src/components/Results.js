import React, { Component } from 'react';
import Result from './Result.js';
import { database, firebaseListToArray } from '../utils/firebase';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      results: [],
      activeResult: null,
    };
  }


  // currentUser.uid ===

  componentDidMount() {
    this.ref = database.ref('/snippets');
    console.log('I AM CURRENT USER!!! ' + JSON.stringify(this.state.currentUser));



    this.ref.on('value', data => {
      const resultsList = firebaseListToArray(data.val());

      //loop through results list
      //make a new object that is all resultList[this].user.uid === currentUser.uid
      //set state to that userResultList


      let userResults; //TODO: James to filter down to User Results only

      this.setState({
        results: resultsList,
      });
    });
  }

  componentWillUnmount() {
    this.ref.off(); // TODO: this doesnt work
  }

  render() {
    return (

      <section className="col-md-8 col-sm-12 results">
        <h4>Hi I am the start of results </h4>


        { this.state.results.map(result => {
          if (result.user.uid === this.state.currentUser.uid)
          return  <Result key={ result.id } data={ result } />
            return ''
        }) }

        <h4> Hi I am the end of results</h4>
      </section>

    );
  }
}

export default Results;
