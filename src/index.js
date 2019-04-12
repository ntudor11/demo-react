import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <App name="Tudor" propArray="[1, 3, 5]">Button is here.</App>
    <hr/>
    <App name="React" propArray="[1, 42, 15]">Button is also there.</App>
  </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
