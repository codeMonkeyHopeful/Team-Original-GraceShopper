import React from 'react';
import { connect } from 'react-redux';
const AddToCartButton = props => {
  const { productId, qty, userId } = props;
  const handleSubmit = e => {
    e.preventDefault();
    if (!productId) {
      console.log('Error: no pid');
      return;
    } else {
      // code for adding to cart goes here
    }
    // delete later
    console.table({ 'userId ': userId, 'product id': productId, 'qty: ': qty });
  };
  return <button onClick={handleSubmit}>Add To Cart</button>;
};

const mapState = ({
  currentUser: {
    profile: { userId },
  },
}) => ({ userId });
export default connect(mapState)(AddToCartButton);
