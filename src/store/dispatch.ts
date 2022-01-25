import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type IDispatch = ThunkDispatch<any, void, AnyAction>;
