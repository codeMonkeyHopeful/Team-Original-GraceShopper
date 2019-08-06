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
      return newProduct;
    }
    return newProduct;
  });
  if (!wasFound) return wasFound;
  else return newCart;
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, qty } = action;
      const updatedCart = newCartToReducer(state.cart, product, qty);

      if (!updatedCart) return { cart: [...state.cart, { product, qty }] };
      else return { ...state, cart: updatedCart };
      // This part moved up to helper function:

      // let wasFound = false;
      // const newCart = state.cart.map(product => {
      //   const newProduct = Object.assign({}, product);
      //   if (newProduct.pid === pid) {
      //     newProduct.qty += qty;
      //     wasFound = true;
      //     return newProduct;
      //   }
      //   return newProduct;
      // });
      // if (!wasFound) {
      //   return {
      //     cart: [...state.cart, { pid, qty, price }]}
      // }
      // return {...state,cart: newCart}
    }
    case GOT_CART: {
      return { cart: action.cart };
    }
    default:
      return state;
  }
};

export default cartReducer;
