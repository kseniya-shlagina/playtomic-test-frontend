import { combineReducers } from "redux";

import { authReducer } from "./auth/authReducer";
import { charactersReducer } from "./characters/charactersReducer";
import { planetsReducer } from "./planets/planetsReducer";

// COMBINED REDUCERS

const rootReducer = combineReducers({
  auth: authReducer,
  characters: charactersReducer,
  planets: planetsReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
