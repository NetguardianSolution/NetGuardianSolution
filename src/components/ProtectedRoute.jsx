// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') || false;
  
  if (!isAuthenticated) {
    // Redirect to login page
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;