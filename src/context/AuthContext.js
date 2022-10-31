import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import {} from "react-router-dom";

// to decode acces token
const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [authTokens, setAuthTokens] = useState(null);

  //   function to login user
  let loginUser = async (e) => {
    e.preventDefault();
    // console.log("form was submitted");
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    console.log("data: ", data);
    console.log(response);
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      alert("Error: ");
    }
  };
  let contextData = {
    user: user,
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
