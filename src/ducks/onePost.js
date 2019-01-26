// @flow
import { apiCall } from "./api";

const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
const FETCH_POST_RESPONSE = "FETCH_POST_RESPONSE";
const FETCH_POST_ERROR = "FETCH_POST_ERROR";

type PostCollectionStateType = {
  isFetching: boolean,
  data: Object,
  error?: string,
};

const initialState = {
  isFetching: false,
  data: {
    post: {
      postAuthor: {},
      postBody: {}
    },
    comments: []
  },
  error: "",
};

export const onePost = (state: PostCollectionStateType = initialState, action: Object) => {
  switch (action.type) {
  case FETCH_POST_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: "",
    };
  case FETCH_POST_RESPONSE:
    return {
      ...state,
      data: action.payload,
      isFetching: false,
    };
  case FETCH_POST_ERROR:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  default:
    return state;
  }
};

const fetchOnePostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

const fetchOnePostResponse = (payload: *) => {
  return {
    type: FETCH_POST_RESPONSE,
    payload,
  };
};

const fetchOnePostError = () => {
  return {
    type: FETCH_POST_ERROR,
  };
};

export const loadOnePost = (id: string) => {
  const apiRoute = `/api/posts/${id}`;

  return apiCall({
    requestPath: apiRoute,
    onApiRequest: fetchOnePostRequest,
    onApiResponse: fetchOnePostResponse,
    onApiError: fetchOnePostError,
  });
};

export const getLoadOnePost = (state: Object) => {
  return state.onePost.data;
};
