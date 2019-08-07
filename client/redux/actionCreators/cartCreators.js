import axios from 'axios';

// action  constants
export const ADD_TO_CART = 'ADD_TO_CART';
export const GOT_CART = 'GOT_CART';
export const CLEAR_CART = 'CLEAR_CART';

// action creators
export const addToCart = (product, qty) => {
  return {
    type: ADD_TO_CART,
    product,
    qty,
  };
};

export const gotCart = cart => {
  return {
    type: GOT_CART,
    cart,
  };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};

// thunks
export const getCartThunk = () => {
  return dispatch => {
    return axios
      .get('/api/carts')
      .then(res => res.data)
      .then(cart => {
        console.log('cart from db', cart);
        dispatch(gotCart(cart));
      });
  };
};
