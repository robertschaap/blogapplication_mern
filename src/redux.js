import { createStore, combineReducers } from "redux";

const initialPostState = {
  post: {
    postAuthor: {
      firstName: "Robert",
      lastName: "Schaap",
      bio: "Lalala"
    },
    postBody: {
      title: "A Post",
      body: "Lorum ipsum dolor sit amet"
    }
  },
  comments: []
};

const LOAD_ONE_POST = "LOAD_ONE_POST";

export const onePost = (state = initialPostState, action) => {
  switch (action.type) {
  case LOAD_ONE_POST:
    return {
      ...state
    };

  default:
    return state;
  }
};

export const reducers = combineReducers({
  onePost
});

// Actions
export const loadOnePost = (payload) => ({
  type: LOAD_ONE_POST,
  payload
});

// Store
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Selector
export const getLoadOnePost = state => state.onePost.post;
export const getLoadComments = state => state.onePost.comments;
