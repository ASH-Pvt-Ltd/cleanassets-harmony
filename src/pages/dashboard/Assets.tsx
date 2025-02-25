
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Assets = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Asset Management</h1>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p>Asset management content will be displayed here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Assets;
