// @flow
const LOAD_POSTS = "LOAD_POSTS";

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
  case LOAD_POSTS:
    return action.payload;
  default:
    return state;
  }
};

export const loadPosts = async (category: string) => {
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

export const getLoadPosts = (state: Object) => {
  return state.posts.data;
};
