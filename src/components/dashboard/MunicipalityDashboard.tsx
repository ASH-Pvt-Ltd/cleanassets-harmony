
import React from 'react';
import StatsCard from './StatsCard';
import { Building2, AlertCircle, ClipboardCheck, FileCheck, FileText } from 'lucide-react';

const MunicipalityDashboard = () => {
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
};

export default MunicipalityDashboard;
