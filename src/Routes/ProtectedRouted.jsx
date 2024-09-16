import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await axios.get('http://localhost:3001/app/verify-token',  { withCredentials: true });
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  if (authenticated === null) {
    return <div>Loading...</div>;
  }

  if (!authenticated) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
