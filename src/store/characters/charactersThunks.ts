import { IDispatch } from "../dispatch";
import to from "await-to-js";
import axios, { AxiosError, AxiosResponse } from "axios";
import { API_ENDPOINT } from "../../api/config";
import {
  getCharactersError,
  getCharactersLoading,
  getCharactersSuccess,
  ICharacter,
} from "./charactersActions";

interface IGetCharactersResponseSuccess {
  data: ICharacter[];
}

interface IGetCharactersResponseError {
  error: string;
}

export const getCharacters = () => async (dispatch: IDispatch) => {
  dispatch(getCharactersLoading());

  const [err, res] = await to<
    AxiosResponse<IGetCharactersResponseSuccess>,
    AxiosError<IGetCharactersResponseError>
  >(axios.get(`${API_ENDPOINT}/characters`));

  if (res) {
    const characters = res.data.data;

    dispatch(getCharactersSuccess(characters));
  } else if (err) {
    const error = err.response?.data.error;
    console.log(error);
    dispatch(getCharactersError(error || "Unknown error"));
  }
};
