import React from 'react';
import { connect } from 'react-redux';
import { CART_ITEMS_TITLE, CART_CONTAINER, CARTEGORIES } from '../styles';

const Cart = props => {
  console.log('props from cart route', props);
  const { cart } = props.cart;
  return (
    <div id="cart-component" style={CART_CONTAINER}>
      <h2 id="cart-title">Cart</h2>
      <div id="cart-items-title" style={CART_ITEMS_TITLE}>
        Items
      </div>
      <table id="cart-products">
        <th id="cart-products-header">
          <tr>PRODUCT</tr>
          <tr>QUANTITY</tr>
          <tr>PRICE</tr>
        </th>
        {cart.map(({ pid, qty, price }) => {
          return (
            <span>
              <tr>{pid}</tr>
              <tr>{qty}</tr>
              <tr>{price}</tr>
            </span>
          );
        })}
      </table>

      {/* <div id="products" style={CARTEGORIES}>
        {cart.map(({ pid, qty, price }) => {
          return (
            <div id="cartegories">
              {pid} {qty} {price}
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

const mapState = ({ currentUser, cart }) => ({ currentUser, cart });

export default connect(mapState)(Cart);
