import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedAdmin({ children }) {
  return children;
}

export default ProtectedAdmin;
