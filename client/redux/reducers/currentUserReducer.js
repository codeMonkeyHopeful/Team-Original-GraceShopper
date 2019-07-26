import { GOT_USER } from './../';

const initialState = {
  id: null,
  email: '',
  profile: {},
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USER:
      return action.user;
    default:
      return state;
  }
};

export default currentUserReducer;
