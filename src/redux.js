import { combineReducers } from "redux";
import { onePost } from "./ducks/onePost";

const initialFormState = {
  data: {},
  status: ""
};

const LOAD_POSTS = "LOAD_POSTS";
const SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS";
const SET_AUTHTOKEN = "SET_AUTHTOKEN";
const CLEAR_AUTHTOKEN = "CLEAR_AUTHTOKEN";
const SET_USER = "SET_USER";

export const posts = (state = [], action) => {
  switch (action.type) {
  case LOAD_POSTS:
    return action.payload;
  default:
    return state;
  }
};

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

export const user = (state = {}, action) => {
  switch (action.type) {
  case SET_USER:
    return action.payload;
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

export const loadPosts = async (category) => {
  const apiRoute = category
    ? `/api/posts/${category ? category : ""}`
    : "/api/posts/";

  const response = await fetch(apiRoute);
  const json = await response.json();

  return {
    type: LOAD_POSTS,
    payload: json
  };
};

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

export const setUser = (payload) => ({
  type: SET_USER,
  payload
});

// Selector
export const getLoadPosts = state => state.posts;
export const getAuth = state => state.auth;
export const getUser = state => state.user;
