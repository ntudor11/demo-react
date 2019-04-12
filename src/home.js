import React, {Component} from 'react';
import './App.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Welcome to demo React app!</h2>
        <ReactCSSTransitionGroup transitionName="example"
          transitionAppear = {true} transitionAppearTimeout = {1000}
          transitionEnter = {false} transitionLeave = {false} >
          <h1>Transitioned element</h1>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Home;
