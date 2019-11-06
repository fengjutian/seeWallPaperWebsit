import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom'

import App from './component/App.js';
import Home from './component/Home.js';
import Home1 from './component/Home1.js';

ReactDOM.render((
  <Router>
      <Route path='/' component={Home}></Route>
      <Route path='/app' component={App}></Route>
      <Route path='/home' component={Home1}></Route>
  </Router>
  // <HashRouter>
  //       <Switch>
  //         <Route path='/' component={Home}></Route>
  //         <Route path='/app' component={App}></Route>
  //         <Route path='/home' component={Home1}></Route>
  //       </Switch>
  //   </HashRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
