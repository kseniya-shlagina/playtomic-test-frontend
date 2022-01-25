import axios, { AxiosError, AxiosResponse } from "axios";

import to from "await-to-js";
import { IDispatch } from "../dispatch";
import {
  signInError,
  signInLoading,
  signInSuccess,
  signOutSuccess,
} from "./authActions";
import { API_ENDPOINT } from "../../api/config";
import {
  resetAuthenticationHeader,
  setAuthenticationHeader,
} from "../../api/authentication";

interface ISignInResponseSuccess {
  token: string;
}

interface ISignInResponseError {
  error: string;
}

interface ISignInInput {
  email: string;
  password: string;
}

export const signIn = (creds: ISignInInput) => async (dispatch: IDispatch) => {
  dispatch(signInLoading());

  const [err, res] = await to<
    AxiosResponse<ISignInResponseSuccess>,
    AxiosError<ISignInResponseError>
  >(axios.post(`${API_ENDPOINT}/login`, creds));

  if (res) {
    const token = res.data.token;

    setAuthenticationHeader(token);

    dispatch(signInSuccess(token));
  } else if (err) {
    const error = err.response?.data.error;
    console.log(error);
    dispatch(signInError(error || "Unknown error"));
  }
};

export const signOut = () => (dispatch: IDispatch) => {
  resetAuthenticationHeader();
  dispatch(signOutSuccess());
};
