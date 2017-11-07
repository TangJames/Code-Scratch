import React, { Component } from 'react';
import Search from './Search.js';
import Results from './Results.js';
import CodeSnippet from './CodeSnippet.js';
import LogoutButton from './LogoutButton.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom';


//<Results currentUser={ this.state.currentUser } /> line: 12
class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      activeComponent: 'search',
    }
    this.handleNewSnippetClick = this.handleNewSnippetClick.bind(this);
  }

  handleNewSnippetClick(evt) {
    evt.preventDefault();
    this.setState({ activeComponent: 'newSnippet' });
  };


  render() {
    let activeHomeContent;
    if (this.state.activeComponent == 'search'){
      activeHomeContent =
        <div>
          <Search currentUser={ this.state.currentUser } />
          <Results currentUser={ this.state.currentUser } />
          <button onClick={ this.handleNewSnippetClick } className="btn-snippet btn btn-primary">
            {  'Add New Code Snippet' }
          </button>
        </div>
    } else if (this.state.activeComponent == 'newSnippet' ){
      activeHomeContent = <CodeSnippet currentUser={ this.state.currentUser } />
    } else {
      activeHomeContent = <h1> Unexplained error!!! (psst, it was aliens...)</h1>
    }
    return (
      <div className="HomePage">
        <div>
          <h1>{this.props.currentUser.displayName}</h1>
          <img className="navbar-profile-pic" src={this.props.currentUser.photoURL} alt="" />
          <LogoutButton />
        </div>
        <div className="HomeContent">
          {activeHomeContent}
        </div>
      </div>
    );
  }
}

export default HomePage;
