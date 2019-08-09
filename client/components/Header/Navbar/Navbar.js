import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginLink from './LoginLink';
import cartImage from './cartImage';

import {
  NAV_LINKS_CONTAINER,
  NAV_LINK,
  PRODUCT_MODAL,
  NAV_ACCOUNT_LINKS_CONTAINER,
} from '../styles';

const Navbar = props => {
  const navbarButtons = ['account', 'orders', 'cart'];

  const { isAdmin, isLoggedIn } = props;

  return (
    <div id="nav-links-container" style={NAV_LINKS_CONTAINER}>
      <div id="nav-products-container">
        {/* modals */}
        <NavLink to="/products" style={PRODUCT_MODAL}>
          <button>Products</button>
        </NavLink>
      </div>
      <div id="nav-account-links-container" style={NAV_ACCOUNT_LINKS_CONTAINER}>
        <LoginLink />
        {navbarButtons.map(button => {
          if (button === 'cart') {
            return (
              <NavLink key={button} to={`/${button}`} style={NAV_LINK}>
                <button>
                  {cartImage} {button[0].toUpperCase()}
                  {button.slice(1)}
                  {/* Need to add number items in cart */}
                </button>
              </NavLink>
            );
          }
          if (button === 'account' && !isLoggedIn) {
            button = 'signup';
          }
          return (
            <NavLink key={button} to={`/${button}`} style={NAV_LINK}>
              <button>
                {button[0].toUpperCase()}
                {button.slice(1)}
              </button>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

const mapState = ({ isLoggedIn, currentUser: { isAdmin } }) => ({
  isLoggedIn,
  isAdmin,
});
export default connect(mapState)(Navbar);
