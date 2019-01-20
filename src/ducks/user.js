// @flow
const SET_USER = "SET_USER";

export const user = (state: Object = {}, action: Object) => {
  switch (action.type) {
  case SET_USER:
    return action.payload;
  default:
    return state;
  }
};

export const setUser = (payload: Object) => ({
  type: SET_USER,
  payload
});

export const getUser = (state: Object) => state.user;
