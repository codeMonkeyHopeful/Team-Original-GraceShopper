import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux';

const AddToCartButton = props => {
  const { productId, qty, userId, price, cart, addToCart } = props;
  const handleSubmit = e => {
    e.preventDefault();
    if (!productId) {
      console.log('Error: no pid');
      return;
    } else {
      // code for adding to cart goes here
      addToCart(productId, qty, price);
      // userId will be undefined if not logged in. Check for that on the api route and use sessionId instead if not logged in
      // console.table({
      //   'userId ': userId,
      //   'product id': productId,
      //   'qty: ': qty,
      // });
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

const mapDispatch = dispatch => {
  return {
    addToCart: (pid, qty, price) => {
      dispatch(addToCart(pid, qty, price));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(AddToCartButton);
