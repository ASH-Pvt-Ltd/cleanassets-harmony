
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import GovernmentDashboard from '@/components/dashboard/GovernmentDashboard';
import MunicipalityDashboard from '@/components/dashboard/MunicipalityDashboard';
import VerificationDashboard from '@/components/dashboard/VerificationDashboard';

const Dashboard = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="h-screen w-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const getDashboardContent = () => {
    switch (user.role) {
      case 'government':
        return <GovernmentDashboard />;
      case 'municipality':
        return <MunicipalityDashboard />;
      case 'verification':
        return <VerificationDashboard />;
      default:
        return <Navigate to="/login" replace />;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome back, {user.name}
          </h2>
          <p className="text-muted-foreground">
            Here's an overview of your {user.role} dashboard
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-lg" />
          {getDashboardContent()}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
