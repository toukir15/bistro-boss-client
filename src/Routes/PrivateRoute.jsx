import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>loading...</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
}
