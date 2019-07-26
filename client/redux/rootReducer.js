import { combineReducers } from 'redux';

// import individual reducers here
import currentUserReducer from './reducers/currentUserReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
});

export default rootReducer;
