import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
const PrivateRoute = () => {
  console.log("private route works");
  // const authenticated = false;
  let { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
