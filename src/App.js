import React, { Component } from 'react';

import Splash from './components/Splash.js';
import HomePage from './components/HomePage.js';
import Search from './components/Search.js';
import CodeSnippet from './components/CodeSnippet.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
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
        <Router>
          <div>
            <Switch>
              <Route path="/" component={Splash} />
              <Route path="/homepage" component={HomePage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
