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

  handleClick(event) {

  }

  render() {
    return (
        <div className="code-snippet">
          <h2> Hi2 </h2>
          <form>
            <textarea
            rows="10"
            cols="50"
            placeholder="insert Code Scratch here"
            value={this.state.value}
            onChange={this.handleChange}
            >
            </textarea>
          </form>
          <form>
            <textarea
            rows="4"
            cols="50"
            placeholder="Tags"
            >
            </textarea>
          </form>
          <button onClick={this.handleClick()}>SAVE YOUR CODE SCRATCH</button>
        </div>
    );
  }
}

export default CodeSnippet;
