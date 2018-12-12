import { combineReducers } from "redux";
import { onePost } from "./ducks/onePost";
import { posts } from "./ducks/posts";
import { user } from "./ducks/user";

const initialFormState = {
  data: {},
  status: ""
};

const SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS";
const SET_AUTHTOKEN = "SET_AUTHTOKEN";
const CLEAR_AUTHTOKEN = "CLEAR_AUTHTOKEN";

export const form = (state = initialFormState, action) => {
  switch (action.type) {
  case SUBMIT_FORM_SUCCESS:
    return state;
  default:
    return state;
  }
};

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

export const reducers = combineReducers({
  onePost,
  posts,
  form,
  auth,
  user,
});

// Actions
export const submitPost = async (formBody) => {
  const body = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formBody)
  };

  const response = await fetch("/api/posts/new", body);
  const json = await response.json();

  return {
    type: SUBMIT_FORM_SUCCESS,
    payload: json
  };
};

export const setAuth = (payload) => ({
  type: SET_AUTHTOKEN,
  payload
});

export const clearAuth = () => ({
  type: CLEAR_AUTHTOKEN,
});

// Selector
export const getAuth = state => state.auth;
