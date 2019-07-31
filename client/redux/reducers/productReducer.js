import {
  GOT_ALL_PRODUCTS,
  GOT_TOP_TIER_CATS,
  INCREMENT_PROD_LEVEL,
  GOT_UPDATED_CATS,
} from '../actionCreators/productsCreators';
import store from '..';

const intialState = {
  productLevel: 1,
  allProducts: [], //will not change
  topLevelCategories: [], //will not change
  currentCategories: [],
  currentProducts: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case GOT_ALL_PRODUCTS:
      return { ...state, allProducts: action.products };
    case GOT_TOP_TIER_CATS:
      return { ...state, topLevelCategories: action.categories };
    case INCREMENT_PROD_LEVEL:
      return { ...state, productLevel: this.productLevel + 1 };
    case GOT_UPDATED_CATS:
      return { ...store, currentCategories: action.updatedCats };
    case GOT_UPDATED_PRODUCTS:
      return { ...store, currentProducts: action.updatedProducts };
    default:
      return state;
  }
};

export default productReducer;
