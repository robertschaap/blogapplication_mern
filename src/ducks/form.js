// @flow
const SUBMIT_FORM_RESPONSE = "SUBMIT_FORM_RESPONSE";

const initialFormState = {
  data: {},
  status: ""
};

export const form = (state: Object = initialFormState, action: Object) => {
  switch (action.type) {
  case SUBMIT_FORM_RESPONSE:
    return state;
  default:
    return state;
  }
};

export const submitPost = async (formBody: Object) => {
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
    type: SUBMIT_FORM_RESPONSE,
    payload: json
  };
};

export const submitNewUser = async (formBody: Object) => {
  const body = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formBody)
  };

  const response = await fetch("/api/users/new", body);
  const json = await response.json();

  return {
    type: SUBMIT_FORM_RESPONSE,
    payload: json,
  };
};

export const submitComment = async (formBody: Object) => {
  const body = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formBody)
  };

  const response = await fetch("/api/comments/new", body);
  const json = await response.json();

  return {
    type: SUBMIT_FORM_RESPONSE,
    payload: json,
  };
};
