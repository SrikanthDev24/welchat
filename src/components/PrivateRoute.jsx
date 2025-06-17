import { useAuth } from '../context/AuthContext'; // ✅ Now this will work
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // Show this while checking

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
