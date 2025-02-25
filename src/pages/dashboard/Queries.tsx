
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Queries = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Queries</h1>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <p>Queries and support content will be displayed here.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Queries;
