import { IRootState } from "../rootReducer";

export const getCharactersData = (state: IRootState) =>
  state.characters.charactersData;

export const areCharactersDataLoading = (state: IRootState) =>
  state.characters.isLoading;
