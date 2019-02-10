// @flow
import { apiCall } from "./api";

const SUBMIT_FORM_REQUEST = "SUBMIT_FORM_REQUEST";
const SUBMIT_FORM_RESPONSE = "SUBMIT_FORM_RESPONSE";
const SUBMIT_FORM_ERROR = "SUBMIT_FORM_ERROR";

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

const submitFormRequest = () => {
  return {
    type: SUBMIT_FORM_REQUEST,
  };
};

const submitFormResponse = (payload: *) => {
  return {
    type: SUBMIT_FORM_RESPONSE,
    payload,
  };
};

const submitFormError = (errorMessage?: string) => {
  return {
    type: SUBMIT_FORM_ERROR,
    error: errorMessage,
  };
};

export const submitPost = async (formBody: Object) => {
  const apiRoute = "/api/posts/new";
  const body = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formBody)
  };

  return apiCall({
    requestPath: apiRoute,
    requestBody: body,
    onApiRequest: submitFormRequest,
    onApiResponse: submitFormResponse,
    onApiError: submitFormError,
  });
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
