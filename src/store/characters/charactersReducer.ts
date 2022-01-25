import { ICharacter, ICharactersAction } from "./charactersActions";

export interface IState {
  charactersData: ICharacter[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  charactersData: [],
  isLoading: false,
  error: null,
};

// CHARACTERS REDUCER

export const charactersReducer = (
  state = initialState,
  action: ICharactersAction
): IState => {
  switch (action.type) {
    case "GET_CHARACTERS_SUCCESS": {
      const { charactersData } = action.payload;

      return {
        ...initialState,
        charactersData,
      };
    }

    case "GET_CHARACTERS_ERROR": {
      const { err } = action.payload;

      return {
        ...initialState,
        error: err,
      };
    }

    case "GET_CHARACTERS_LOADING": {
      return {
        ...initialState,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};
