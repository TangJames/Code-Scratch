import React, { Component } from 'react';
import Result from './Result.js';
import { database, firebaseListToArray } from '../utils/firebase';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: this.props.currentUser,
      results: [],
    };
  }

  componentDidMount() {
    this.ref = database.ref('/snippets');
    this.ref.on('value', data => {
      const resultsList = firebaseListToArray(data.val());

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


        { this.state.results.map(result => (
          <Result key={ result.id } data={ result } />
        )) }

        <h4> Hi I am the end of results</h4>
      </section>

    );
  }
}

export default Results;
