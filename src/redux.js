import { createStore, combineReducers } from "redux";

const initialPostState = {
  post: {
    postAuthor: {},
    postBody: {}
  },
  comments: []
};

const LOAD_ONE_POST = "LOAD_ONE_POST";
const LOAD_POSTS = "LOAD_POSTS";
const SET_AUTHTOKEN = "SET_AUTHTOKEN";
const CLEAR_AUTHTOKEN = "CLEAR_AUTHTOKEN";
const SET_USER = "SET_USER";

export const onePost = (state = initialPostState, action) => {
  switch (action.type) {
  case LOAD_ONE_POST:
    return action.payload;
  default:
    return state;
  }
};

export const posts = (state = [], action) => {
  switch (action.type) {
  case LOAD_POSTS:
    return action.payload;
  default:
    return state;
  }
};

export const auth = (state = "token", action) => {
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
  auth,
  user,
});

// Actions
export const loadOnePost = (payload) => ({
  type: LOAD_ONE_POST,
  payload
});

export const loadPosts = (payload) => ({
  type: LOAD_POSTS,
  payload
});

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

// Store
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Selector
export const getLoadOnePost = state => state.onePost;
export const getLoadPosts = state => state.posts;
export const getAuth = state => state.auth;
export const getUser = state => state.user;
