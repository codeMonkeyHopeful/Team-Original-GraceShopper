import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from './Header/Header';
// remove Test component
const Test = props => {
  return <div>Testing</div>;
};

const AppRouter = () => {
  return (
    <div id="main-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Test} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
