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
  NavLink
} from 'react-router-dom';
//**banner route for testing only
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route path="/homepage" component={HomePage} />
              <Route path="/banner" component={Header} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
