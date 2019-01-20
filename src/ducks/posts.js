// @flow
const LOAD_POSTS = "LOAD_POSTS";

export const posts = (state: Array<Object> = [], action: Object) => {
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
  return state.posts;
};
