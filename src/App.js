import React, { Component } from 'react';

import Splash from './components/Splash.js';
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
    return (
      <div className="App">

        <Splash currentUser={ this.state.currentUser } />

        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Splash} currentUser={ this.state.currentUser } />
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
