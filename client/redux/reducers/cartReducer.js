import { ADD_TO_CART, GET_USER_CART } from '../actionCreators/cartCreators';

const initialState = {
  productId: '',
  quantity: 0,
  userId: '',
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return { ...state, productId: action.productId };
    }
    case GET_USER_CART: {
      return { ...state, userId: action.id };
    }
    default:
      return state;
  }
};

export default cartReducer;
