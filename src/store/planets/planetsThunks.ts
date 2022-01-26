import { IDispatch } from "../dispatch";
import to from "await-to-js";
import axios, { AxiosError, AxiosResponse } from "axios";
import { API_ENDPOINT } from "../../api/config";
import {
  getPlanetsError,
  getPlanetsLoading,
  getPlanetsSuccess,
  IPlanet,
} from "./planetsActions";

interface IGetPlanetsResponseSuccess {
  data: IPlanet[];
}

interface IGetPlanetsResponseError {
  error: string;
}

export const getPlanets = () => async (dispatch: IDispatch) => {
  dispatch(getPlanetsLoading());

  const [err, res] = await to<
    AxiosResponse<IGetPlanetsResponseSuccess>,
    AxiosError<IGetPlanetsResponseError>
  >(axios.get(`${API_ENDPOINT}/planets`));

  if (res) {
    const planets = res.data.data;

    dispatch(getPlanetsSuccess(planets));
  } else if (err) {
    const error = err.response?.data.error;
    console.log(error);
    dispatch(getPlanetsError(error || "Unknown error"));
  }
};
