import axios from 'axios';

// action constants
export const GOT_ALL_PRODUCTS = 'GOT_ALL_PRODUCTS';
export const GOT_TOP_TIER_CATS = 'GOT_TOP_TIER_CATS';
export const INCREMENT_PROD_LEVEL = 'INCREMENT_PROD_LEVEL';
export const GOT_UPDATED_PRODUCTS = 'GOT_UPDATED_PRODUCTS';
export const GOT_UPDATED_CATS = 'GOT_UPDATED_CATS';

//action creators
export const gotAllProducts = products => {
  return { type: GOT_ALL_PRODUCTS, products };
};

export const gotTopTierCats = categories => {
  return { type: GOT_TOP_TIER_CATS, categories };
};

export const incrementProdLevel = () => {
  //this will update the product level in store
  return { type: INCREMENT_PROD_LEVEL };
};

export const gotUpdatedProducts = updatedProducts => {
  return { type: GOT_UPDATED_PRODUCTS, updatedProducts };
};

export const gotUpdatedCats = updatedCats => {
  return { type: GOT_UPDATED_CATS, updatedCats };
};

// thunks
export const getAllProducts = () => {
  return dispatch => {
    return axios
      .get('/api/products')
      .then(res => dispatch(gotAllProducts(res.data)))
      .catch(next());
  };
};

export const getTopTierCategories = () => {
  return dispatch => {
    return axios
      .get('/api/categories/level1')
      .then(res => dispatch(gotTopTierCats(res.data)));
  };
};
