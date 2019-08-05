import axios from 'axios';

// action  constants
export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_USER_CART = 'GET_USER_CART';

// action creators
export const addProductToCart = productId => {
  return { type: ADD_TO_CART, productId };
};

export const getUser = id => {
  return { type: GET_USER_CART, id };
};

// thunks
export const userCartThunk = userId => {
  return dispatch => {
    return axios
      .get('/api/carts', { userId })
      .then(res => {
        const user = res.data;
        console.log('cart thunk', user);
        dispatch(getUserCart(user));
      })
      .catch(() => {
        console.log('Error retrieving user cart');
      });
  };
};
