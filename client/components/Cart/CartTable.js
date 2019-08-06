import React from 'react';
import { connect } from 'react-redux';

const CartTable = props => {
  const { cart } = props.cart;
  if (cart.length === 0) {
    return <h3>Nothing in your cart yet. Get shopping!</h3>;
  }
  let total = 0;
  return (
    <table id="cartegories">
      <tbody>
        <tr>
          <th>PRODUCTS</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
        </tr>
        {cart.map(({ pid, qty, price }) => {
          total += Number(price);
          return (
            <tr key={pid}>
              <td>{pid}</td>
              <td>{qty}</td>
              <td>{price}</td>
            </tr>
          );
        })}
        <tr />
        <tr>
          <td>TOTAL</td>
          <td />
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

const mapState = ({ cart }) => ({ cart });

export default connect(mapState)(CartTable);
