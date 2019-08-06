import { ADD_TO_CART } from '../actionCreators/cartCreators';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const wasFound = false;
      const newCart = state.cart.map(product => {
        const newProduct = Object.assign({}, product);
        if (action.pid === product.id) {
          newProduct.qty += action.qty;
          wasFound = true;
        }
      });
      if (!wasFound) {
        newCart.push(action.pid, action.qty, action.price);
      }
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};

export default cartReducer;
