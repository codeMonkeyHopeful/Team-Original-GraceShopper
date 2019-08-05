import React from 'react';
import { connect } from 'react-redux';
import { addProductToCart } from '../../redux';

const AddToCartButton = props => {
  console.log('props', props);
  const { productId, qty, userId } = props;
  const handleSubmit = e => {
    e.preventDefault();
    if (!productId) {
      console.log('Error: no pid');
      return;
    } else {
      // code for adding to cart goes here
      addProductToCart(productId);
      // userId will be undefined if not logged in. Check for that on the api route and use sessionId instead if not logged in
      console.table({
        'userId ': userId,
        'product id': productId,
        'qty: ': qty,
      });
    }
  };
  return <button onClick={handleSubmit}>Add To Cart</button>;
};

const mapState = ({
  currentUser: {
    profile: { userId },
  },
}) => ({ userId });

const mapDispatch = dispatch => ({
  addProductToCart: productId => {
    dispatch(addProductToCart(productId));
  },
});

export default connect(
  mapState,
  mapDispatch
)(AddToCartButton);
