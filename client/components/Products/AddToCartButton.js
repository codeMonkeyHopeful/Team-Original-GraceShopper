import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux';

const AddToCartButton = props => {
  const { qty, addToCart, productInfo } = props;
  const handleSubmit = e => {
    e.preventDefault();
    if (!productInfo.id) {
      console.log('Error: no pid');
      return;
    } else {
      addToCart(productInfo, qty);
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
  cart,
}) => ({ userId, cart });

const mapDispatch = dispatch => {
  return {
    addToCart: (productInfo, qty) => {
      dispatch(addToCart(productInfo, qty));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(AddToCartButton);
