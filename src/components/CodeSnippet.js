// This file goes into homePage.js
import React, { Component } from 'react';
import { database } from '../utils/firebase';

class CodeSnippet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeSnippetTitle: '',
      codeSnippetText: '',
      codeSnippetTags: [],
      submitState: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleSubmitRender = this._handleSubmitRender.bind(this);
  }

  componentWillMount() {
    this.ref = database.ref('/snippets');
  }

  componentWillUnmount() {
    this.ref.off();
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.ref.push({
      user: {
        uid: this.props.currentUser.uid,
        photo: this.props.currentUser.photoURL,
        name: this.props.currentUser.displayName,
      },
      title: this.state.codeSnippetTitle,
      snippet: this.state.codeSnippetText,
      tags: [this.state.codeSnippetTags],
      '.priority': 0 - Date.now(),
      })
      .then(() => {
        console.log('added new quote');
      })
      .catch(() => {
        console.log('error adding new Snippet');
      });

    this.setState({
      submitState: 'submitted',
    });

  }

  _handleSubmitRender = () => {
    this.props.renderNewSubmit();
  }


  render() {
    let _handleSubmitRender;
    return (
        <div className="code-snippet">
          <h2> Code Snippet </h2>
          <form onSubmit={ this.handleSubmit } className="form-add-snippet">

            <div className="row">
              <input
                onChange={ (evt) => { this.setState({ codeSnippetTitle: evt.target.value}); } }
                value={ this.state.codeSnippetTitle }
                placeholder='Enter a title' />
            </div>

            <div className="row">
              <textarea
                onChange={ (evt) => { this.setState({ codeSnippetText: evt.target.value}); } }
                value={ this.state.codeSnippetText }
                rows="10"
                cols="50"
                placeholder="insert Code Scratch here">
              </textarea>
            </div>

            <div className="row">
              <textarea
                onChange={ (evt) => { this.setState({ codeSnippetTags: evt.target.value}); } }
                value={ this.state.codeSnippetTags }
                rows="4"
                cols="50"
                placeholder="Enter search tags">
              </textarea>
            </div>

            <div className="row">
              <button
                onPress={this._handleSubmitRender}
                >SAVE YOUR CODE SCRATCH</button>
            </div>

          </form>
        </div>
    );
  }
}

export default CodeSnippet;
