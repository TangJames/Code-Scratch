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
      //make a new object that is all resultList[this].user.uid === this.state.currentUser.uid
      //set state to that userResultList


      const userResults = React.createClass({
        render: function(){
          return<ul>{this.createItems(this.props.items)}</ul>;
        },
        createItems: function(items){
          var output = [];
          for(var i = 0; i < items.length; i++){
            if (items.user.id === this.state.currentUser.uid){
             output.push(<li>{items[i]}</li>);
            }
          }
        }
      });

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
