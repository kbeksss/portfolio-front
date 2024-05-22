import { useMemo } from "react";
import { Navigate, Outlet } from "react-router";
import { getLocalToken } from "shared/api/xhr/helpers";

const ProtectedRoute = ({ redirectTo = "/login", ...rest }) => {
  const token = useMemo(() => getLocalToken(), []);
  return token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={redirectTo} {...rest} />
  );
};

export default ProtectedRoute;
