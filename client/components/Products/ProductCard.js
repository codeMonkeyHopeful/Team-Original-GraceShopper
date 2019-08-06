import React from 'react';
import AddToCartButton from './AddToCartButton';

const ProductCard = props => {
  const { name, id, price, image_url } = props.product;

  return (
    <div className="product-card-container">
      <h3>{name}</h3>
      <img src={image_url} alt="product image" />
      <div>
        <p>${price}</p>
        <AddToCartButton productId={id} qty={1} price={price} />
      </div>
    </div>
  );
};

export default ProductCard;
