import { Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { isAuthenticated } from "../store/auth/authSelectors";

export const AuthenticatedRoute: React.FC = ({ children }) => {
  const authenticated = useSelector(isAuthenticated);

  if (!authenticated) return <Navigate to="/login" />;

  return <>{children}</>;
};
