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
import DataDevices from './Products/DataDevices';
import Computers from './Products/Computers';
import TypeWriters from './Products/TypeWriters';
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
          <Route path='/1' component={Computers} />
          <Route path='/2' component={TypeWriters} />
          <Route path='/3' component={DataDevices} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
