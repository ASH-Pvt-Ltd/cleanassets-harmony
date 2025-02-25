
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p>Reports and analytics will be displayed here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
