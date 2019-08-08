import axios from 'axios';
import {
  ADD_TO_CART,
  GOT_CART,
  CLEAR_CART,
  INCREASE_CART_QTY,
  DECREASE_CART_QTY,
} from '../actionCreators/cartCreators';

const initialState = {
  cart: [],
};

// Reducer helper functions
const newCartToReducer = (cart, product, mode, qty = 1) => {
  let wasFound = false;
  const newCart = cart.map(cartProd => {
    const newProduct = Object.assign({}, cartProd);
    if (newProduct.product.id === product.id) {
      if (mode === ADD_TO_CART) {
        newProduct.qty += qty;
        wasFound = true;
      }
      if (mode === INCREASE_CART_QTY) {
        newProduct.qty += 1;
        wasFound = true;
      }
      if (mode === DECREASE_CART_QTY) {
        newProduct.qty -= 1;
        wasFound = true;
      }
    }
    return newProduct;
  });
  if (!wasFound && mode === ADD_TO_CART) {
    newCart.push({ product, qty });
  }
  return { cart: newCart };
};

const updateCartToDb = cart => {
  return axios
    .post('/api/carts', cart)
    .then(() => {
      console.log('DB updated cart');
    })
    .catch(() => console.log('Error updating cart to db!'));
};

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, qty } = action;
      const updatedCart = newCartToReducer(
        state.cart,
        product,
        ADD_TO_CART,
        qty
      );
      updateCartToDb(updatedCart);

      return updatedCart;
    }
    case GOT_CART: {
      return { cart: action.cart };
    }
    case CLEAR_CART: {
      return { cart: [] };
    }
    case INCREASE_CART_QTY: {
      const { product } = action;
      const updatedCart = newCartToReducer(
        state.cart,
        product,
        INCREASE_CART_QTY,
        1
      );
      updateCartToDb(updatedCart);

      return updatedCart;
    }
    case DECREASE_CART_QTY: {
      const { product } = action;
      const updatedCart = newCartToReducer(
        state.cart,
        product,
        DECREASE_CART_QTY,
        1
      );
      updateCartToDb(updatedCart);

      return updatedCart;
    }
    default:
      return state;
  }
};

export default cartReducer;
