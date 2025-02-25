
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Pending = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Pending Verifications</h1>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p>Pending verifications will be displayed here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pending;
