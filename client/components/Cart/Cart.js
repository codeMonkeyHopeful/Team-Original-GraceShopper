import React from 'react';
import { connect } from 'react-redux';
import { CART_ITEMS_TITLE, CART_CONTAINER, CART_TABLE } from './styles';
import CartTable from './CartTable';

const Cart = props => {
  return (
    <div id="cart-component" style={CART_CONTAINER}>
      <h2 id="cart-title">Cart</h2>
      <div id="cart-items-title" style={CART_ITEMS_TITLE}>
        Items
      </div>
      <CartTable style={CART_TABLE} />
    </div>
  );
};

const mapState = ({ currentUser, cart }) => ({ currentUser, cart });

export default connect(mapState)(Cart);
