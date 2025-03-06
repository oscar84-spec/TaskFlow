import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { verificarSesion } from "../request/route-protected";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const data = async () => {
      try {
        const res = verificarSesion();
        setIsAuthenticated(!!res);
      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      }
    };
    data();
  }, []);

  if (isAuthenticated === null) return <p>Verificando sesión...</p>;

  return isAuthenticated ? children : <Navigate to='/login' />;
};

export default ProtectedRoute;
