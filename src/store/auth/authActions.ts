export const signInSuccess = (token: string) => ({
  type: "SIGN_IN_SUCCESS" as const,
  payload: {
    token,
  },
});

export const signInError = (err: string) => ({
  type: "SIGN_IN_ERROR" as const,
  payload: {
    err,
  },
});

export const signInLoading = () => ({
  type: "SIGN_IN_LOADING" as const,
});

export const signOutSuccess = () => ({
  type: "SIGN_OUT_SUCCESS" as const,
});

export type IAuthAction =
  | ReturnType<typeof signInSuccess>
  | ReturnType<typeof signInError>
  | ReturnType<typeof signInLoading>
  | ReturnType<typeof signOutSuccess>;
