import React, { Component } from 'react';
import './App.css';
import Splash from './components/Splash.js';
import HomePage from './components/HomePage.js';
import Search from './components/Search.js';
import CodeSnippet from './components/CodeSnippet.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash />
        <HomePage />
      </div>
    );
  }
}

export default App;
