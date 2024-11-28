import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "@/features/authentication/useUser";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, user, isAdmin } = useUser();

  useEffect(() => {
    if ((!isAuthenticated || !isAdmin) && !isLoading) navigate("/");
  }, [isAuthenticated, isLoading, isAdmin, navigate]);

  if (isLoading) return null;
  console.log(user.role);

  if (isAdmin && isAuthenticated) return children;
}

export default ProtectedRoutes;
