
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Truck, ClipboardCheck, AlertCircle, FileCheck, Ban, Users2, FileText, ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const StatsCard = ({ title, value, description, icon: Icon, trend }: {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  trend?: { type: 'up' | 'down'; value: string };
}) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <div className="rounded-full bg-primary/10 p-2.5">
        <Icon className="h-4 w-4 text-primary" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-baseline space-x-3">
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <div className={`flex items-center text-xs font-medium ${
            trend.type === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.type === 'up' ? (
              <ArrowUpIcon className="mr-1 h-3 w-3" />
            ) : (
              <ArrowDownIcon className="mr-1 h-3 w-3" />
            )}
            {trend.value}
          </div>
        )}
      </div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const getDashboardContent = () => {
    switch (user.role) {
      case 'government':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatsCard
                title="Total Assets"
                value="1,234"
                description="Across all municipalities"
                icon={Building2}
                trend={{ type: 'up', value: '12% vs last month' }}
              />
              <StatsCard
                title="Fleet Status"
                value="85%"
                description="Operational vehicles"
                icon={Truck}
                trend={{ type: 'down', value: '3% vs last week' }}
              />
              <StatsCard
                title="Pending Approvals"
                value="12"
                description="Requiring attention"
                icon={ClipboardCheck}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Active Users"
                value="156"
                description="Municipality officers"
                icon={Users2}
              />
              <StatsCard
                title="Monthly Reports"
                value="28"
                description="Generated this month"
                icon={FileText}
              />
              <StatsCard
                title="Resolved Queries"
                value="45"
                description="Last 30 days"
                icon={FileCheck}
                trend={{ type: 'up', value: '18% more' }}
              />
              <StatsCard
                title="Critical Issues"
                value="3"
                description="Needs immediate attention"
                icon={AlertCircle}
              />
            </div>
          </div>
        );

      case 'municipality':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatsCard
                title="My Assets"
                value="156"
                description="Total assigned assets"
                icon={Building2}
                trend={{ type: 'up', value: '8% vs last month' }}
              />
              <StatsCard
                title="Active Queries"
                value="3"
                description="Awaiting response"
                icon={AlertCircle}
              />
              <StatsCard
                title="Pending Requests"
                value="2"
                description="Asset addition requests"
                icon={ClipboardCheck}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatsCard
                title="Completed Tasks"
                value="45"
                description="This month"
                icon={FileCheck}
                trend={{ type: 'up', value: '23% improvement' }}
              />
              <StatsCard
                title="Reports Generated"
                value="12"
                description="Last 30 days"
                icon={FileText}
              />
              <StatsCard
                title="Issues Resolved"
                value="28"
                description="This month"
                icon={AlertCircle}
                trend={{ type: 'up', value: '15% better' }}
              />
            </div>
          </div>
        );

      case 'verification':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatsCard
                title="Pending Verifications"
                value="8"
                description="Awaiting review"
                icon={ClipboardCheck}
                trend={{ type: 'down', value: '25% less' }}
              />
              <StatsCard
                title="Verified Today"
                value="5"
                description="Successfully processed"
                icon={FileCheck}
              />
              <StatsCard
                title="Rejected Records"
                value="2"
                description="Failed verification"
                icon={Ban}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StatsCard
                title="Average Response Time"
                value="2.4h"
                description="Last 7 days"
                icon={FileText}
                trend={{ type: 'up', value: '12% faster' }}
              />
              <StatsCard
                title="Total Processed"
                value="145"
                description="This month"
                icon={Building2}
              />
              <StatsCard
                title="Approval Rate"
                value="94%"
                description="Last 30 days"
                icon={FileCheck}
                trend={{ type: 'up', value: '3% better' }}
              />
            </div>
          </div>
        );

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
            Here's an overview of your dashboard
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
