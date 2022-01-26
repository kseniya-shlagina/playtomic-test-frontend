import { IPlanet, IPlanetsAction } from "./planetsActions";

export interface IState {
  planetsData: IPlanet[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IState = {
  planetsData: [],
  isLoading: false,
  error: null,
};

// PLANETS REDUCER

export const planetsReducer = (
  state = initialState,
  action: IPlanetsAction
): IState => {
  switch (action.type) {
    case "GET_PLANETS_SUCCESS": {
      const { planetsData } = action.payload;

      return {
        ...initialState,
        planetsData,
      };
    }

    case "GET_PLANETS_ERROR": {
      const { err } = action.payload;

      return {
        ...initialState,
        error: err,
      };
    }

    case "GET_PLANETS_LOADING": {
      return {
        ...initialState,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};
