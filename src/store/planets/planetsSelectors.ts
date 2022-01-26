import { IRootState } from "../rootReducer";

export const getPlanetsData = (state: IRootState) => state.planets.planetsData;

export const isPlanetsDataLoading = (state: IRootState) =>
  state.planets.isLoading;

export const getPlanetsDataError = (state: IRootState) => state.planets.error;
