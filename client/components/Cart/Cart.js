import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CART_CONTAINER, CART_TABLE, CHECKOUT_BUTTON } from './styles';
import CartTable from './CartTable';

const Cart = props => {
  const { cart } = props.cart;
  return (
    <div id="cart-component" style={CART_CONTAINER}>
      <h2 id="cart-title">Cart</h2>
      <CartTable style={CART_TABLE} />
      &nbsp; &nbsp;
      <div style={CHECKOUT_BUTTON}>
        {cart.length !== 0 && (
          <NavLink to="/checkout">
            <button id="checkout-button">CHECKOUT</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

const mapState = ({ currentUser, cart }) => ({ currentUser, cart });

export default connect(mapState)(Cart);
