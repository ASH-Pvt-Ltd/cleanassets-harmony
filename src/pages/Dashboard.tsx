
import React, { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import GovernmentDashboard from '@/components/dashboard/GovernmentDashboard';
import MunicipalityDashboard from '@/components/dashboard/MunicipalityDashboard';
import VerificationDashboard from '@/components/dashboard/VerificationDashboard';

const Dashboard = () => {
  const { user, isLoading } = useAuth();

  // Show loading spinner while checking auth state
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
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

  const getDashboardTitle = () => {
    switch (user.role) {
      case 'government':
        return 'Government of Goa Dashboard';
      case 'municipality':
        return `${user.organization} Dashboard`;
      case 'verification':
        return 'Verification Department Dashboard';
      default:
        return 'Dashboard';
    }
  };

  return (
    <DashboardLayout>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }>
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {getDashboardTitle()}
            </h2>
            <p className="text-muted-foreground">
              {user.role === 'government' 
                ? 'Centralized Waste Management Asset Overview'
                : `Here's an overview of your ${user.role} dashboard`}
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-lg" />
            {getDashboardContent()}
          </div>
        </div>
      </Suspense>
    </DashboardLayout>
  );
};

export default Dashboard;
