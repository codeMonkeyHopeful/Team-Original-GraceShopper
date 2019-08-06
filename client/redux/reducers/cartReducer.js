import { ADD_TO_CART } from '../actionCreators/cartCreators';

const initialState = {
  cart: [],
  product: {},
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { pid, qty, price } = action;
      let wasFound = false;
      const newCart = state.cart.map(product => {
        const newProduct = Object.assign({}, product);
        if (newProduct.pid === pid) {
          newProduct.qty += qty;
          wasFound = true;
          return newProduct;
        }
        return newProduct;
      });
      if (!wasFound) {
        return {
          cart: [...state.cart, { pid, qty, price }],
        };
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
