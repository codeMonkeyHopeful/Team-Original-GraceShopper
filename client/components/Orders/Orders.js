import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isTerminatorless } from '@babel/types';

const Orders = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    axios
      .get('/api/orders')
      .then(result => {
        console.log('axios');
        setOrderItems(() => [...result.data]);
      })
      .catch(e => console.error(e));
  }, []);

  console.log('this is a test: ', orderItems);

  return (
    <div>
      <h2>Your Previous Orders</h2>
      <table>
        <th>Product ID</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Purchase Date</th>
        {orderItems.map(item => {
          return (
            <tr>
              <td>{item.productId}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{item.timeStamp}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Orders;
