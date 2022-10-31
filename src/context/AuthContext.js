import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [authToken, setAuthToken] = useState(null);
  let contextData = {};
  return <AuthContext.Provider value="">{children}</AuthContext.Provider>;
};
