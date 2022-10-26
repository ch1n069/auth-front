import React from "react";

const LoginPage = () => {
  return (
    <div>
      <form>
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
