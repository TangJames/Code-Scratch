// This file goes into homePage.js
import React, { Component } from 'react';
import { database } from '../utils/firebase';

class ViewCodeSnippet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeSnippetTitle: this.props.activeResult.title,
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

  _handleSubmitRender = () => {
    this.props.renderNewSubmit();
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
        console.log('added new snippet');
        document.getElementById=('form-add-snippet').reset();
      })
      .catch(() => {
        console.log('error adding new Snippet');
        this._handleSubmitRender();
      });

    this.setState({
      submitState: 'submitted',
    });

  }



  render() {
    let _handleSubmitRender;
    return (

        <div>

        <h1> Hi I am View Code Snippet </h1>
        <p>{ this.props.activeResult.title }</p>

        </div>
        /*
         /// <div className="code-snippet">
        //   <h2> Code Snippet </h2>
        //   <form onSubmit={ this.handleSubmit } id="form-add-snippet" className="form-add-snippet">

        //     <div className="row">
        //       <input
        //         onChange={ (evt) => { this.setState({ codeSnippetTitle: evt.target.value}); } }
        //         value={ this.state.codeSnippetTitle }
        //         placeholder='Enter a title' />
        //     </div>

        //     <div className="row">
        //       <textarea
        //         onChange={ (evt) => { this.setState({ codeSnippetText: evt.target.value}); } }
        //         value={ this.state.codeSnippetText }
        //         rows="10"
        //         cols="50"
        //         placeholder="insert Code Scratch here">
        //       </textarea>
        //     </div>

        //     <div className="row">
        //       <textarea
        //         onChange={ (evt) => { this.setState({ codeSnippetTags: evt.target.value}); } }
        //         value={ this.state.codeSnippetTags }
        //         rows="4"
        //         cols="50"
        //         placeholder="Enter search tags">
        //       </textarea>
        //     </div>

        //     <div className="row">
        //       <button>SAVE YOUR CODE SCRATCH</button>
        //     </div>

        //   </form>
        // </div>
      */
    );
  }
}

export default ViewCodeSnippet;
