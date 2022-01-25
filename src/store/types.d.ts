import "react-redux";
import { IRootState } from "./rootReducer";

declare module "react-redux" {
  interface DefaultRootState extends IRootState {}
}
