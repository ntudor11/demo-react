import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: '',
    };
    this.setNewNumber = this.setNewNumber.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    this.setState({
      data: e.target.value
    });
  }

  setNewNumber() {
    this.setState({
      count: this.state.count + 1
    });
  }

  btnClick() {
    alert("Button clicked");
  }

  render() {
    return (
      <div>
      <Header/>
        <h2>Hello, {this.props.name}</h2>
        <h2>Value of state: {this.state.count}</h2>
        <p>{this.props.children}</p>
        <p>Array: {this.props.propArray}</p>
        <p></p>
        <button onClick={this.btnClick}>Click here</button>
        <button onClick={this.setNewNumber}>Increment by 1</button>
        <br/>
        <br/>
        <input type="text" value={this.state.data} onChange={this.updateState}/>
        <h4>{this.state.data}</h4>
        <Content/>
      </div>
    );
  }
}

App.propTypes = {
   name: PropTypes.string,
   propArray: PropTypes.array.isRequired,
//   propBool: PropTypes.bool.isRequired,
//   propFunc: PropTypes.func,
//   propNumber: PropTypes.number,
//   propString: PropTypes.string,
 };
//
 App.defaultProps = {
   name: 'My React App',
//   propArray: [1, 2, 3, 4, 5],
//   propBool: true,
//   propFunc: function(e) {
//     return e;
//   },
//   propNumber: 1,
//   propString: 'Value of String',
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
