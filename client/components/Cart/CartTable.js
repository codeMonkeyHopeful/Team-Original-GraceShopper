import React from 'react';
import { connect } from 'react-redux';
import IncreaseButton from './IncreaseButton';
import DecreaseButton from './DecreaseButton';

const CartTable = props => {
  const { cart } = props.cart;
  console.log('cartTable', cart);
  if (cart.length === 0) {
    return <h3>Nothing in your cart yet. Get shopping!</h3>;
  }
  let total = 0;
  return (
    <table id='cartegories'>
      <tbody>
        <tr>
          <th>PRODUCTS</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
        </tr>
        {cart.map(({ product, qty }) => {
          const { id, name, price, image_url } = product;
          total += Number(price) * qty;
          return (
            <tr key={id}>
              <td
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img
                  src={image_url}
                  style={{ width: '30px', marginRight: '30px' }}
                />
                <div>{name}</div>
              </td>
              <td>
                <DecreaseButton qty={qty} product={product} />
                &nbsp;
                {qty} &nbsp;
                <IncreaseButton product={product} />
              </td>
              <td>${price}</td>
            </tr>
          );
        })}
        <tr />
        <tr height='9px' />
        <tr id='total-row'>
          <td>
            <b>TOTAL</b>
          </td>
          <td id='total-middle' />
          <td id='total-amount'>${total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};

const mapState = ({ cart }) => ({ cart });

export default connect(mapState)(CartTable);
