import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();
  if (auth?.currentUserLoading) {
    return <h1>Loading...</h1>;
  }
  if (!auth?.currentUser) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
}
