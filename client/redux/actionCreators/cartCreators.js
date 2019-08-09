import axios from 'axios';

// action  constants
export const ADD_TO_CART = 'ADD_TO_CART';
export const GOT_CART = 'GOT_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const INCREASE_CART_QTY = 'INCREASE_CART_QTY';
export const DECREASE_CART_QTY = 'DECREASE_CART_QTY';

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

export const increaseQty = product => {
  return { type: INCREASE_CART_QTY, product };
};

export const decreaseQty = product => {
  return { type: DECREASE_CART_QTY, product };
};

// thunks
export const getCartThunk = beforeLoginCart => {
  return dispatch => {
    return axios
      .get('/api/carts')
      .then(res => res.data)
      .then(cart => {
        dispatch(gotCart(cart));

        if (beforeLoginCart.cart.length) {
          beforeLoginCart.cart.forEach(({ product, qty }) => {
            dispatch(addToCart(product, qty));
          });
        }
      });
  };
};
