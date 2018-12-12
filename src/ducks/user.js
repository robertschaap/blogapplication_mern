const SET_USER = "SET_USER";

export const user = (state = {}, action) => {
  switch (action.type) {
  case SET_USER:
    return action.payload;
  default:
    return state;
  }
};

export const setUser = (payload) => ({
  type: SET_USER,
  payload
});

export const getUser = state => state.user;
