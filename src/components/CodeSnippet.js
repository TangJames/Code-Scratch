// This file goes into homePage.js
import React, { Component } from 'react';


class CodeSnippet extends Component {
  constructor(props) {
    super(props);

    this.state={
      value: ''
    };

    this.getInitialState = this.getInitialState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getInitialState() {
    this.setState({
    return {value: 'Enter your code scratch here'};
    });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <div className="CodeSnippet">
          <h2> Hi2 </h2>
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
        </div>
    );
  }
}

export default CodeSnippet;
