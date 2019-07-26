// action constants
export const GOT_USER = 'GOT_USER';

//action creators
export const gotUser = user => {
  return { type: GOT_USER, user };
};

// thunks
