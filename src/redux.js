// @flow
import { combineReducers } from "redux";
import { onePost } from "./ducks/onePost";
import { posts } from "./ducks/posts";
import { user } from "./ducks/user";
import { auth } from "./ducks/auth";
import { form } from "./ducks/form";

export const reducers = combineReducers({
  onePost,
  posts,
  form,
  auth,
  user,
});
