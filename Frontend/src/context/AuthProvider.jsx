import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { getCurrentUser } from "../auth/AuthManager";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    setIsLoggedIn(!!user);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
