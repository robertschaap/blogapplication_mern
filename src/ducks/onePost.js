// @flow
const LOAD_ONE_POST = "LOAD_ONE_POST";

const initialPostState = {
  post: {
    postAuthor: {},
    postBody: {}
  },
  comments: []
};

export const onePost = (state: Object = initialPostState, action: Object) => {
  switch (action.type) {
  case LOAD_ONE_POST:
    return action.payload;
  default:
    return state;
  }
};

export const loadOnePost = async (id: string) => {
  const response = await fetch(`/api/posts/${id}`);
  const json = await response.json();

  return {
    type: LOAD_ONE_POST,
    payload: json
  };
};

export const getLoadOnePost = (state: Object) => {
  return state.onePost;
};
