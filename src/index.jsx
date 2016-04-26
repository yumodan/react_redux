import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';
import {Route, Router, hashHistory} from 'react-router';

const routes = <Route component={App}>
  <Route path="/" component={Voting}/>
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app');
);