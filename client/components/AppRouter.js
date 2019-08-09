import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import Header from './Header/Header';
import AccountProfile from './Header/Navbar/AccountProfile';
import Login from './login/Login';
import Signup from './Signup/Signup';
import MainProducts from './Products/MainProducts';
import SingleProduct from './Products/SingleProduct';
import { Cart, CheckoutPage } from './Cart';
import SearchPage from './Products/SearchPage';
import Orders from './Orders/Orders';
import Home from './Home/Home';

import {
  changeLoginStatus,
  gotUser,
  getAllProducts,
  getTopTierCategories,
  getAllCategories,
  getCartThunk,
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

  props.getAllCategories();

  props.getCartThunk();
  // remove Test component

  // const Home = () => {
  //   return (
  //     <div>
  //       <p>Home sweet home</p>
  //     </div>
  //   );
  // };
  return (
    <div id="main-container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={AccountProfile} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/products/search" component={SearchPage} />
          <Route exact path="/products" component={MainProducts} />
          <Route exact path="/products/single/:id" component={SingleProduct} />
          <Route exact path="/products/:pc1" component={MainProducts} />
          <Route exact path="/products/:pc1/:pc2" component={MainProducts} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/products/:pc1/:pc2/:pc3"
            component={MainProducts}
          />
          <Route exact path="/orders" component={Orders} />
          <Redirect to="/" />
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
  getAllCategories: () => dispatch(getAllCategories()),
  getCartThunk: () => dispatch(getCartThunk()),
});
export default connect(
  null,
  mapDispatch
)(AppRouter);
