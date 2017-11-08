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
    this.getResultsFromResult = this.getResultsFromResult.bind(this);
    this.sendResultsToHomePage = this.sendResultsToHomePage.bind(this);
  }

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

  sendResultsToHomePage(resultData) {
    // TODO handle an event that sends an object from
    // this components state to homepage
    //send that stuff back to this component parent(HomePage)
    let thisResult = resultData;
    this.props.renderViewThis(thisResult);
  }



  getResultsFromResult(item){
    let myResult = item;
    this.setState({
      activeResult: myResult,
    });
    console.log("I RECEIVED DATA! " + JSON.stringify(this.state.activeResult));
  }
  //TODO what action on this page fires off _ResultsToHomePage
    //add if statement that gets state

  render() {
    let renderViewThis;
    if(this.state.activeResult != null){
      console.log("I AM IF STATEMENT in RESULTS");
      this.sendResultsToHomePage(this.state.activeResult);
      this.setState({
        activeResult: null,
      });
    }

    return (
      <section className="col-md-8 col-sm-12 results">
        <h4>Hi I am the start of results </h4>

        { this.state.results.map(result => (
          <Result
            key={ result.id }
            data={ result }
            getResultsFromResult={ this.getResultsFromResult }
            />
        )) }

        <h4> Hi I am the end of results</h4>
      </section>
    );
  }
}

export default Results;
