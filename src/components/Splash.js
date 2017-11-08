import React, { Component } from 'react';
import logo_cat from '../logo_cat.png';
import LoginButton from './LoginButton.js';
import '../styles/css/index.css';

class Splash extends Component {
  render() {
    // Here we pass relevant state to our child components
    // as props. Note that functions are passed using `bind` to
    // make sure we keep our scope to App
    return (
      <div className='login-button'>
        <LoginButton />
      </div>
    )
  }
}

export default Splash;
