const SET_AUTHTOKEN = "SET_AUTHTOKEN";
const CLEAR_AUTHTOKEN = "CLEAR_AUTHTOKEN";

export const auth = (state = "", action) => {
  switch (action.type) {
  case SET_AUTHTOKEN:
    return action.payload;
  case CLEAR_AUTHTOKEN:
    return "";
  default:
    return state;
  }
};

export const setAuth = (payload) => ({
  type: SET_AUTHTOKEN,
  payload
});

export const clearAuth = () => ({
  type: CLEAR_AUTHTOKEN,
});

export const getAuth = state => {
  return state.auth;
};
