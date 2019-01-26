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

    if (response.status === 200) {
      const payload = await response.json();
      dispatch(onApiResponse(payload));
    } else {
      throw Error(String(response.status));
    }
  } catch (error) {
    dispatch(onApiError("error"));
  }
};
