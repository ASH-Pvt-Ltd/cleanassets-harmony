
import React from 'react';
import StatsCard from './StatsCard';
import { ClipboardCheck, FileCheck, Ban, FileText, Building2 } from 'lucide-react';

const VerificationDashboard = () => {
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
};

export default VerificationDashboard;
