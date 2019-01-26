// @flow
import { apiCall } from "./api";

const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
const FETCH_POSTS_RESPONSE = "FETCH_POSTS_RESPONSE";
const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

type PostsCollectionStateType = {
  isFetching: boolean,
  data: Array<Object>,
  error?: string,
};

const initialState: PostsCollectionStateType = {
  isFetching: false,
  data: [],
  error: "",
};

export const posts = (state: PostsCollectionStateType = initialState, action: Object) => {
  switch (action.type) {
  case FETCH_POSTS_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: "",
    };
  case FETCH_POSTS_RESPONSE:
    return {
      ...state,
      data: action.payload,
      isFetching: false,
    };
  case FETCH_POSTS_ERROR:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  default:
    return state;
  }
};

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

const fetchPostsResponse = (payload: *) => {
  return {
    type: FETCH_POSTS_RESPONSE,
    payload,
  };
};

const fetchPostsError = (errorMessage?: string) => {
  return {
    type: FETCH_POSTS_ERROR,
    error: errorMessage,
  };
};

export const loadPosts = (category: string) => {
  const apiRoute = category
    ? `/api/posts/${category ? category : ""}`
    : "/api/posts/";

  return apiCall({
    requestPath: apiRoute,
    onApiRequest: fetchPostsRequest,
    onApiResponse: fetchPostsResponse,
    onApiError: fetchPostsError,
  });
};

export const getPosts = (state: Object) => {
  return state.posts.data;
};
