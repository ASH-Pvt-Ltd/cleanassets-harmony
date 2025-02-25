
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Approvals = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Approvals</h1>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p>Approvals content will be displayed here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Approvals;
