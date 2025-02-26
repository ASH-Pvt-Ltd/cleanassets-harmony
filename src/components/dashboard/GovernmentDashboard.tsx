
import React from 'react';
import StatsCard from './StatsCard';
import { Building2, Truck, ClipboardCheck, AlertCircle, FileCheck, Users2, FileText } from 'lucide-react';

const GovernmentDashboard = () => {
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
};

export default GovernmentDashboard;
