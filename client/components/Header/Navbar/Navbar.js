import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginLink from './LoginLink';

import {
  NAV_LINKS_CONTAINER,
  NAV_LINK,
  PRODUCT_MODAL,
  NAV_ACCOUNT_LINKS_CONTAINER,
} from '../styles';

const Navbar = () => {
  return (
    <div id="nav-links-container" style={NAV_LINKS_CONTAINER}>
      <div id="nav-products-container">
        {/* modals */}
        <a href="/products" style={PRODUCT_MODAL}>
          Products
        </a>
        <a href="/brands" style={PRODUCT_MODAL}>
          Brands
        </a>
      </div>
      <div id="nav-account-links-container" style={NAV_ACCOUNT_LINKS_CONTAINER}>
        {/* login status should come from redux */}

        <LoginLink />
        <NavLink to="/account" style={NAV_LINK}>
          Account
        </NavLink>
        <NavLink to="/orders" style={NAV_LINK}>
          Orders
        </NavLink>
        <NavLink to="/cart" style={NAV_LINK}>
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
