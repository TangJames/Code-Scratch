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
      <div className="splash">
        <LoginButton />
        <div className="wrapper">

          <div className="cat">
            <span className="eyes left"></span>
            <span className="eyes right"></span>
            <span className="mouth"></span>
          </div>

          <div className="moon">
            <div className="sphere"></div>
          </div>

          <div className="cloud-container">
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
            <div className="cloud"></div>
          </div>

        </div>

        <div className="description">
          <p>Capture, Organize and Search your private vault of code.</p>
        </div>
      </div>
    )
  }
}

export default Splash;
