import React, { useState, useEffect } from 'react';
import ProductNav from './ProductNav';

import { connect } from 'react-redux';
import AddToCartButton from './AddToCartButton';

const SingleProduct = props => {
  const [productInfo, setProductInfo] = useState({});
  const productId = props.match.params.id;
  const { allProducts, allCategories } = props;
  const params = {
    pc1: productInfo.parent_category_1,
    pc2: productInfo.parent_category_2,
    pc3: productInfo.parent_category_3,
  };

  useEffect(() => {
    const foundInfo = allProducts.find(prod => prod.id === parseInt(productId));
    // getting all products can be async depending on how you get to the page.
    // need to wait for allProducts to get loaded before trying to set the state
    if (foundInfo) {
      setProductInfo(foundInfo);
    }
  }, [allProducts, allCategories]);

  return (
    <div>
      <ProductNav allCategories={allCategories} params={params} />
      <h1>
        {productInfo.name} ${productInfo.price}
      </h1>
      <img src={productInfo.image_url} alt="product image" />
      <h2>Description:</h2>
      <p>{productInfo.description}</p>
      <AddToCartButton productId={productInfo.id} />
    </div>
  );
};

const mapState = ({ product: { allProducts, allCategories } }) => ({
  allProducts,
  allCategories,
});

export default connect(mapState)(SingleProduct);
