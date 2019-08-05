import React from 'react';

const AddToCartButton = props => {
  const { productId } = props;
  const handleSubmit = e => {
    e.preventDefault();
    if (!productId) {
      console.log('no pid');
      return;
    }
    console.log('adding ', productId, ' to cart');
  };
  return <button onClick={handleSubmit}>Add To Cart</button>;
};

export default AddToCartButton;
