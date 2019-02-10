// @flow
import { apiCall } from "./api";

const SUBMIT_FORM_REQUEST = "SUBMIT_FORM_REQUEST";
const SUBMIT_FORM_RESPONSE = "SUBMIT_FORM_RESPONSE";
const SUBMIT_FORM_ERROR = "SUBMIT_FORM_ERROR";

const initialFormState = {
  isFetching: false,
  data: {},
  error: "",
};

export const form = (state: Object = initialFormState, action: Object) => {
  switch (action.type) {
  case SUBMIT_FORM_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: "",
    };
  case SUBMIT_FORM_RESPONSE:
    return {
      ...state,
      data: action.payload,
      isFetching: false,
    };
  case SUBMIT_FORM_ERROR:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
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

  return apiCall({
    requestPath: apiRoute,
    requestBody: formBody,
    onApiRequest: submitFormRequest,
    onApiResponse: submitFormResponse,
    onApiError: submitFormError,
  });
};

export const submitNewUser = async (formBody: Object) => {
  const apiRoute = "/api/users/new";

  return apiCall({
    requestPath: apiRoute,
    requestBody: formBody,
    onApiRequest: submitFormRequest,
    onApiResponse: submitFormResponse,
    onApiError: submitFormError,
  });
};

export const submitComment = async (formBody: Object) => {
  const apiRoute = "/api/comments/new";

  return apiCall({
    requestPath: apiRoute,
    requestBody: formBody,
    onApiRequest: submitFormRequest,
    onApiResponse: submitFormResponse,
    onApiError: submitFormError,
  });
};
