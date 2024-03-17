import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import PropTypes from "prop-types";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
