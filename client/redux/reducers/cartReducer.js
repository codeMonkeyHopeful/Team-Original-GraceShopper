import axios from 'axios';
import { ADD_TO_CART, GOT_CART } from '../actionCreators/cartCreators';

const initialState = {
  cart: [],
};

const newCartToReducer = (cart, product, qty) => {
  let wasFound = false;
  const newCart = cart.map(cartProd => {
    const newProduct = Object.assign({}, cartProd);
    if (newProduct.product.id === product.id) {
      newProduct.qty += qty;
      wasFound = true;
    }
    return newProduct;
  });
  if (!wasFound) {
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

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, qty } = action;
      const updatedCart = newCartToReducer(state.cart, product, qty);
      updateCartToDb(updatedCart);

      return updatedCart;
    }
    case GOT_CART: {
      return { cart: action.cart };
    }
    default:
      return state;
  }
};

export default cartReducer;
