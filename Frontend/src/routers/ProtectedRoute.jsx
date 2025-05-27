import React from "react";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../auth/AuthManager";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = getCurrentUser();
  return isLoggedIn ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
