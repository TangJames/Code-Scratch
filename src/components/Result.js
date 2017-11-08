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
    return <div>{this.props.data.title}
              <form onSubmit={ this.sendThisToResults } id="form-result-snippet" className="form-result-snippet">
                    <div className="row">
                      <button>View</button>
                    </div>
              </form>
    </div>;
  }
}

export default Result;
