import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Emp from './emp';
import Home from './home';
import Login from './login';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: '',
      emps: [
        {id: 101, name: 'Paul', salary: 5000},
        {id: 102, name: 'Sam', salary: 2000},
        {id: 103, name: 'Sid', salary: 2500},
        {id: 104, name: 'John', salary: 5000},
        {id: 105, name: 'Alice', salary: 4000}
      ],
    };
    this.setNewNumber = this.setNewNumber.bind(this);
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
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

  clearInput() {
    this.setState({
      data: '',
    });
    ReactDOM.findDOMNode(this.refs.myText).focus();
  }

  delEmp = (index, e) => {
    const copyemps = Object.assign([], this.state.emps);
    copyemps.splice(index, 1);
    this.setState({emps:copyemps});
  }

  render() {
    return (
      <Router>
        <div class="navbar">
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/login'}><li>Login</li></Link>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </div>
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
          <input type="text" ref="myText" value={this.state.data} onChange={this.updateState}/>
          <h4>{this.state.data}</h4>
          <button onClick={this.clearInput}>Clear input</button>

          <h2>Collections</h2>
          <table style={{width:'500px'}}>
            <tbody>
              <tr style={{ backgroundColor:'grey', color:'white'}}>
                <td>Name</td>
                <td>Salary</td>
                <td>Actions</td>
              </tr>
              {
                this.state.emps.map((emp, id) => {
                  return (<Emp
                    salary ={emp.salary}
                    key={emp.id}
                    deleteEvent={this.delEmp.bind(this, id)}>
                    {emp.name}</Emp>)
                })
              }
            </tbody>
          </table>
          <Content/>
        </div>
      </Router>
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
   propArray: [1, 2, 3, 4, 5],
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
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
