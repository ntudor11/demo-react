import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
        <h1>Hello, {this.props.name}</h1>
        <p>Array: {this.props.array}</p>
        <p>Bool: {this.props.propBool ? "true..." : "False..."}</p>
        <p>Function: {this.props.propFunc(3)}</p>
        <p>Number: {this.props.propNumber}</p>
        <p>String {this.props.propString}</p>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

App.defaultProps = {
  name: 'My React App',
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function(e) {
    return e;
  },
  propNumber: 1,
  propString: 'String value',
};

class Header extends App {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p>The text</p>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
