import React, { Component } from 'react';


class Result extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeResultObject: this.props.data,
    }
    this.sendThisToResults = this.sendThisToResults.bind(this);
  }

  sendThisToResults(evt){
    evt.preventDefault();

    console.log("A result submitting itself to Results state with " +JSON.stringify(this.state.activeResultObject));
    this.props.getResultsFromResult(this.state.activeResultObject);
  }

  render() {
    console.log(this.props.data);
    let getResultsFromResult;
    return <div className="row">

                <div className="resultTitle">{this.props.data.title}</div>
                  <form onSubmit={ this.sendThisToResults } id="form-result-snippet" className="form-result-snippet">
                    <button className="btn-result">View</button>
                  </form>
            </div>
    ;
  }
}

export default Result;
