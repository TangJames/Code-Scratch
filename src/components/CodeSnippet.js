// This file goes into homePage.js
import React, { Component } from 'react';

class CodeSnippet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.getInitialState = this.getInitialState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getInitialState() {
    return ({value: 'Enter your code scratch here'});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        <div className="code-snippet">
          <h2> Hi2 </h2>
          <form>
            <textarea rows="4" cols="50"></textarea>
            <input
              type="text"
              placeholder="Code scratch"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </div>
    );
  }
}

export default CodeSnippet;
