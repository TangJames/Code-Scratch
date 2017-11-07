import React, { Component } from 'react';
import logo_black from '../logo_black.png';
import LoginButton from './LoginButton.js';

class Splash extends Component {

  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
      <div>
        <LoginButton />
      </div>
    )
  }
}

export default Splash;
