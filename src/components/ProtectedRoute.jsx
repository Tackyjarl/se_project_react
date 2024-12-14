import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({
  isLoggedIn,
  children,
  anonymous = false,
  isLoggedInLoading,
}) {
  const location = useLocation();
  const from = location.state?.from || "/";
  if (isLoggedInLoading) return null;
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;
