import { combineReducers } from "redux";

import { authReducer } from "./auth/authReducer";
import { charactersReducer } from "./characters/charactersReducer";

// COMBINED REDUCERS

const rootReducer = combineReducers({
  auth: authReducer,
  characters: charactersReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
