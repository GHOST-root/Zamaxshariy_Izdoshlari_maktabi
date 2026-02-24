import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedAdmin({ children }) {
  const { isAdmin } = useContext(AuthContext);

  if (isAdmin === null) {
    return null; // yoki loader
  }

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default ProtectedAdmin;
