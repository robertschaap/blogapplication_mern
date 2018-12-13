const SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS";

const initialFormState = {
  data: {},
  status: ""
};

export const form = (state = initialFormState, action) => {
  switch (action.type) {
  case SUBMIT_FORM_SUCCESS:
    return state;
  default:
    return state;
  }
};

export const submitPost = async (formBody) => {
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
    type: SUBMIT_FORM_SUCCESS,
    payload: json
  };
};
