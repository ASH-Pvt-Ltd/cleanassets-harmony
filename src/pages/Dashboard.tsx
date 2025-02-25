
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  switch (user.role) {
    case 'government':
      return <div>Government Dashboard</div>;
    case 'municipality':
      return <div>Municipality Dashboard</div>;
    case 'verification':
      return <div>Verification Officer Dashboard</div>;
    default:
      return <Navigate to="/login" replace />;
  }
};

export default Dashboard;
