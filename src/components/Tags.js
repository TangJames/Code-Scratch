// This file goes into homePage.js
import React, { Component } from 'react';
import CodeSnippet from './CodeSnippet.js';

class Tags extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: []
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
          <form>
            <textarea
            rows="4"
            cols="50"
            placeholder="Tags"
            setState={this.state.tags}
            >
            </textarea>
          </form>
        </div>
    );
  }
}

export default Tags;
