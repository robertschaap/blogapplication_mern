// @flow
type ApiCallParamsPropsType = {
  requestPath: string,
  requestHeaders?: Object,
  onApiRequest: () => Object,
  onApiResponse: (payload: string) => Object,
  onApiError: (message: string) => Object,
};

export const apiCall = (params: ApiCallParamsPropsType) => async (dispatch: Function) => {
  const {
    requestPath,
    requestHeaders,
    onApiRequest,
    onApiResponse,
    onApiError,
  } = params;

  dispatch(onApiRequest());

  try {
    const response = await fetch(requestPath, requestHeaders);
    const payload = await response.json();

    if (response.status !== 200) {
      throw Error(String(response.status));
    }

    if (payload.hasOwnProperty("data")) {
      dispatch(onApiResponse(payload.data));
    } else {
      dispatch(onApiResponse(payload));
    }
  } catch (error) {
    dispatch(onApiError("error"));
  }
};
