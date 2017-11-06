import React, { Component } from 'react';
import './App.css';
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/login" component={Splash} />
              <Route path="/homepage" component={HomePage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
