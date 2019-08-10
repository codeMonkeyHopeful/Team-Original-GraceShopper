import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const Orders = props => {
  const [orderItems, setOrderItems] = useState([]);
  const { allProducts } = props.product;
  console.log(allProducts);

  useEffect(() => {
    axios
      .get('/api/orders')
      .then(result => {
        console.log('axios');
        setOrderItems(() => [...result.data]);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <div>
      <h2>Your Previous Orders</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Purchase Date</th>
          </tr>
          {orderItems.map((orderItem, i) => {
            const itemName = allProducts.filter(
              product => product.id === orderItem.productId
            )[0];
            return (
              <tr key={i}>
                <td>{itemName.name}</td>
                <td>{orderItem.qty}</td>
                <td>{orderItem.price}</td>
                <td>{orderItem.timeStamp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
const mapState = ({ product }) => ({ product });

export default connect(mapState)(Orders);
