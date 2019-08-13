import React from 'react';
import { connect } from 'react-redux';
import IncreaseButton from './IncreaseButton';
import DecreaseButton from './DecreaseButton';
import RemoveButton from './RemoveButton';

const CartTable = props => {
  const { cart } = props.cart;
  if (cart.length === 0) {
    return <h3>Nothing in your cart yet. Get shopping!</h3>;
  }
  let total = 0;
  return (
<<<<<<< HEAD
    <table id='cartegories'>
      <tbody>
=======
    <table className="table">
      <tbody className="thead-dark">
>>>>>>> b8f0b024819be3cd0996e46d89452fd0214dd70d
        <tr>
          <th scope="col">PRODUCTS</th>
          <th scope="col">QUANTITY</th>
          <th scope="col">PRICE</th>
          <th scope="col">REMOVE</th>
        </tr>
      </tbody>
      <tbody>
        {cart.map(({ product, qty }) => {
          const { id, name, price, image_url } = product;
          total += Number(price) * qty;
          return (
            <tr key={id}>
              <th
                scope="row"
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
              </th>
              <td className="text-center">
                <DecreaseButton qty={qty} product={product} />
                &nbsp;
                {qty} &nbsp;
                <IncreaseButton product={product} />
              </td>
              <td className="text-center">${price}</td>
              <td className="text-center">
                <RemoveButton product={product} />
              </td>
            </tr>
          );
        })}
        <tr />
<<<<<<< HEAD
        <tr height='9px' />
        <tr id='total-row'>
=======
        <tr scope="row">
>>>>>>> b8f0b024819be3cd0996e46d89452fd0214dd70d
          <td>
            <b>TOTAL:</b>
          </td>
<<<<<<< HEAD
          <td id='total-middle' />
          <td id='total-amount'>${total.toFixed(2)}</td>
=======
          <td id="total-middle" />
          <td id="total-amount" className="text-center">
            ${total.toFixed(2)}
          </td>
          <td />
>>>>>>> b8f0b024819be3cd0996e46d89452fd0214dd70d
        </tr>
      </tbody>
    </table>
  );
};

const mapState = ({ cart }) => ({ cart });

export default connect(mapState)(CartTable);
