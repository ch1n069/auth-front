import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [authTokens, setAuthTokens] = useState(null);

  //   function to login user
  let loginUser = async (e) => {
    e.preventDefault();
    console.log('form was submitted')
    // let response = fetch("http://127.0.0.1:8000/api/token/", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ username: null, password: null }),
    });
  };
  let contextData = {
    loginUser: loginUser,
  };

  return (
    <AuthContext.provider value={contextData}>{children}</AuthContext.provider>
  );
};
