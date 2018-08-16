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

export const reducers = combineReducers({
  onePost,
  posts
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

// Store
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Selector
export const getLoadOnePost = state => state.onePost;
export const getLoadPosts = state => state.posts;
