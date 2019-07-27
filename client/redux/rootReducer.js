import { combineReducers } from 'redux';

// import individual reducers here
import currentUserReducer from './reducers/currentUserReducer';
import isLoggedInReducer from './reducers/isLoggedInReducer';
const rootReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
  currentUser: currentUserReducer,
});

export default rootReducer;
