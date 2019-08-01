import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Header from './Header/Header';
import AccountProfile from './Header/Navbar/AccountProfile';
import Login from './login/Login';
import MainProducts from './Products/MainProducts';
import DataDevices from './Products/DataDevices';
import Computers from './Products/Computers';
import TypeWriters from './Products/TypeWriters';

import axios from 'axios';

import {
  changeLoginStatus,
  gotUser,
  getAllProducts,
  getTopTierCategories,
} from './../redux';

const AppRouter = props => {
  const { changeLogin, setUserInfo } = props;
  // check login status based on express session
  axios
    .get('/api/users/checklogin')
    .then(res => {
      const userInfo = res.data;
      if (userInfo) {
        console.log('logged in', userInfo);
        changeLogin(true);
        setUserInfo(userInfo);
      } else {
        console.log('not logged in');
      }
    })
    .catch(e => console.error(e));

  //Pull in all products to store
  props.getAllProds();
  //Pull in all top tier categories to store
  props.getTopTierCats();

  // remove Test component

  const Home = () => {
    return (
      <div>
        <p>Home sweet home</p>
      </div>
    );
  };
  return (
    <div id="main-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={AccountProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={MainProducts} />
          <Route exact path="/1" component={Computers} />
          <Route exact path="/2" component={TypeWriters} />
          <Route exact path="/3" component={DataDevices} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatch = dispatch => ({
  changeLogin: status => dispatch(changeLoginStatus(status)),
  setUserInfo: user => dispatch(gotUser(user)),
  getAllProds: () => dispatch(getAllProducts()),
  getTopTierCats: () => dispatch(getTopTierCategories()),
});
export default connect(
  null,
  mapDispatch
)(AppRouter);
