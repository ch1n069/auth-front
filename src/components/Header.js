import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const Header = () => {
  let { user } = useContext(AuthContext);
  return (
    <div>
      <Link to="/">Home</Link>

      {user ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
      {user && <p>Hello {user.username}</p>}
    </div>
  );
};

export default Header;
