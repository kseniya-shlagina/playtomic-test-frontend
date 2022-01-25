import { getAuthenticationHeader } from "../../api/authentication";
import Jwt from "jsonwebtoken";
import { IAuthAction } from "./authActions";

export interface IState {
  user: {
    name: string;
    email: string;
    _id: string;
  } | null;
  token: string | null;
  error: string | null;
  isLoading: boolean;
}

interface IJWTPayload {
  name: string;
  email: string;
  _id: string;
}

const emptyState: IState = {
  token: null,
  user: null,
  error: null,
  isLoading: false,
};

const initialState = (() => {
  const token = getAuthenticationHeader();

  if (!token) return emptyState;

  const jwtPayload = Jwt.decode(token);
  const { name, email, _id } = jwtPayload as IJWTPayload;

  return {
    ...emptyState,
    user: {
      name,
      email,
      _id,
    },
    token,
  };
})();

// AUTH REDUCER

export const authReducer = (
  state = initialState,
  action: IAuthAction
): IState => {
  switch (action.type) {
    case "SIGN_IN_SUCCESS": {
      const { token } = action.payload;

      const jwtPayload = Jwt.decode(token);

      if (typeof jwtPayload === "string") {
        return {
          ...emptyState,
          error: "Backend returned incorrect token",
        };
      }

      const { name, email, _id } = jwtPayload as IJWTPayload;

      return {
        ...emptyState,
        token,
        user: {
          name,
          email,
          _id,
        },
      };
    }

    case "SIGN_IN_ERROR": {
      const { err } = action.payload;

      return {
        ...emptyState,
        error: err,
      };
    }

    case "SIGN_IN_LOADING": {
      return {
        ...emptyState,
        isLoading: true,
      };
    }

    case "SIGN_OUT_SUCCESS": {
      return {
        ...emptyState,
      };
    }
    default:
      return state;
  }
};
