
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Help = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Help Center</h1>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p>Help and support content will be displayed here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Help;
