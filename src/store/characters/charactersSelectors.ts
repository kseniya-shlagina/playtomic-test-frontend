import { IRootState } from "../rootReducer";

export const getCharactersData = (state: IRootState) =>
  state.characters.charactersData;

export const isCharactersDataLoading = (state: IRootState) =>
  state.characters.isLoading;

export const getCharactersDataError = (state: IRootState) =>
  state.characters.error;
