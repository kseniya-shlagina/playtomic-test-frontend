import { IRootState } from "../rootReducer";

export const IsAuthenticated = (state: IRootState) => state.auth.token !== null;

export const getUserName = (state: IRootState) => state.auth.user?.name;

export const getAuthenticationError = (state: IRootState) => state.auth.error;

export const isAuthenticationLoading = (state: IRootState) =>
  state.auth.isLoading;
