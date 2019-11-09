// @flow
type ApiCallParamsPropsType = {
  requestPath: string,
  requestBody?: Object,
  onApiRequest: () => Object,
  onApiResponse: (payload: string) => Object,
  onApiError: (message: string) => Object,
};

export const apiCall = (params: ApiCallParamsPropsType) => async (dispatch: Function) => {
  const {
    requestPath,
    requestBody,
    onApiRequest,
    onApiResponse,
    onApiError,
  } = params;

  dispatch(onApiRequest());

  const requestOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: "",
  };

  if (requestBody) {
    requestOptions.body = JSON.stringify(requestBody);
  }

  try {
    const response = await fetch(requestPath, requestBody ? requestOptions : undefined);
    const payload = await response.json();

    if (response.status !== 200 || payload.status === "error") {
      throw Error(String(response.status));
    }

    dispatch(onApiResponse(payload));
  } catch (error) {
    dispatch(onApiError("error"));
  }
};
