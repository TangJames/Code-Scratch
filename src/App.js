import React, { Component } from 'react';

import Splash from './components/Splash2.js';
import HomePage from './components/HomePage.js';
import Search from './components/Search.js';
import CodeSnippet from './components/CodeSnippet.js';
import Header from './components/Header.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom';

import { auth } from './utils/firebase';

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      currentUser: null,
    };
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(evt) {
    console.log('hi from Jesse brain' + evt);
    evt.preventDefault();
    this.setState({ currentUser: null });
  }

  componentWillMount() {
    auth.onAuthStateChanged(newUser => {
      if (newUser) {
        console.log('logged in!', newUser);
        this.setState({ currentUser: newUser });
      } else {
        console.log('logged out.');
        this.setState({ currentUser: null });
      }
    });
  }

  render() {
    let appActiveContent;
    if (!this.state.currentUser){
      console.log(this.state.currentUser);
      appActiveContent = <Splash currentUser={ this.state.currentUser } />
    } else if (this.state.currentUser){
      console.log(this.state.currentUser);
      appActiveContent =
        <div>
          <HomePage currentUser={ this.state.currentUser } />
          <a href="#" onClick={ this.logoutUser } >Logout</a>
        </div>
    } else {
      appActiveContent =
        <div>
          <h1> Unexplained error!!! (psst, it was aliens...)</h1>
        </div>
    }

    return (
      <div className="App">
        <h1>Hi I am your app</h1>
        {appActiveContent}
        <h2>Hi i am under your active content</h2>

        <Router>
          <div>
            <Switch>
              <Route path="/homepage" component={HomePage} />
              <Route path="/banner" component={Header} />
              <Route path="/CodeSnippet" component={CodeSnippet} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
