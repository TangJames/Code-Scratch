import React, { Component } from 'react';
import Result from './Result.js';
import { database, firebaseListToArray } from '../utils/firebase';

class Results extends Component {
  constructor(props) {
    super(props);
    let bacon = this.props.keyword;
    this.state = {
      currentUser: this.props.currentUser,
      meow: this.props.keyword,
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

      this.setState({
        results: resultsList,
      });
    });
  }

  componentWillUnmount() {
    this.ref.off(); // TODO: this doesnt work
  }

  //VIEW CODESNIPPET Fn - sends clicked result to homepage to load ViewCodeSnippet
  sendResultsToHomePage(resultData) {
    // TODO handle an event that sends an object from
    // this components state to homepage
    //send that stuff back to this component parent(HomePage)
    let thisResult = resultData;
    this.props.renderViewThis(thisResult);
  }

  //VIEW CODESNIPPET fn - gets the clicked result in result.js to results state to send to HomePage
  // in order to load ViewCodeSnippet.js with that clicked result
  getResultsFromResult(item){
    let myResult = item;
    this.setState({
      activeResult: myResult,
    });
    console.log("I RECEIVED DATA! " + JSON.stringify(this.state.activeResult));
  }


  render() {
    let renderViewThis;
    let userFilter;

      console.log("Results.js: i think keyword is: " + this.props.keyword);
    if(this.state.activeResult != null){
      this.sendResultsToHomePage(this.state.activeResult);
      this.setState({
        activeResult: null,
      });
    }

    if(this.props.keyword !== null){
      userFilter = this.state.results
                    .filter(result => result.user.uid === this.state.currentUser.uid)
                    .filter( result => result.title.indexOf(this.props.keyword)!== -1 || result.tags.indexOf(this.props.keyword)!== -1 || result.snippet.indexOf(this.props.keyword)!== -1  )
                    .map(result => (
                      <Result
                        key={ result.id }
                        data={ result }
                        getResultsFromResult={ this.getResultsFromResult }
                      />
                    ));
    } else if (this.props.keyword == null || this.props.keyword == undefined) {
     userFilter = this.state.results
                    .filter(result => result.user.uid === this.state.currentUser.uid)
                    .map(result => (
                      <Result
                        key={ result.id }
                        data={ result }
                        getResultsFromResult={ this.getResultsFromResult }
                      />
                    ));
    }


    return (
      <div>
      <section className="col-md-8 col-sm-12 results">

           { userFilter }

      </section>
      </div>
    );
  }
}

export default Results;
