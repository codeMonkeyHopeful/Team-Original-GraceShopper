import axios from 'axios';

// action  constants
export const ADD_TO_CART = 'ADD_TO_CART';

// action creators
export const addToCart = (pid, qty, price) => {
  return {
    type: ADD_TO_CART,
    pid,
    qty,
    price,
  };
};

// thunks
