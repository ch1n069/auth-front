import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          type="text"
          name="username"
          value=""
          placeholder="Enter Username"
        />
        <input
          type="password"
          name="password"
          value=""
          placeholder="Enter Password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
