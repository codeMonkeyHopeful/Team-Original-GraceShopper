import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux';

const AddToCartButton = props => {
  console.log('props from button', props);
  const { productId, qty, userId, price, cart } = props;
  const handleSubmit = e => {
    e.preventDefault();
    if (!productId) {
      console.log('Error: no pid');
      return;
    } else {
      // code for adding to cart goes here
      addToCart(productId, qty, price);
      // userId will be undefined if not logged in. Check for that on the api route and use sessionId instead if not logged in
      console.table({
        'userId ': userId,
        'product id': productId,
        'qty: ': qty,
      });
      console.log('added to cart', cart, price);
    }
  };
  return <button onClick={handleSubmit}>Add To Cart</button>;
};

const mapState = ({
  currentUser: {
    profile: { userId },
  },
  product,
  cart,
}) => ({ userId, cart, product });

export default connect(mapState)(AddToCartButton);
