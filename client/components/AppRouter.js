import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from './Header/Header';
import AccountProfile from './Header/Navbar/AccountProfile';
import MainProducts from './Products/MainProducts';
// remove Test component
const Test = props => {
  return <div>Home Sweet Home</div>;
};

const AppRouter = () => {
  return (
    <div id='main-container'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Test} />
          <Route exact path='/account' component={AccountProfile} />
          <Route exact path='/products' component={MainProducts} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
