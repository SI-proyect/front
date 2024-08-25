import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import PropTypes from "prop-types";
import "../styles/loader.css";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="loader"></div>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
