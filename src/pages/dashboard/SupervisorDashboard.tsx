
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Truck, ClipboardCheck, Map } from 'lucide-react';

const SupervisorDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Supervisor Dashboard</h1>
        <div className="space-x-4">
          <span>Welcome, {user?.name}</span>
          <Button variant="outline" onClick={logout}>Logout</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-6 w-6" />
              Fleet Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Monitor vehicle operations and maintenance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="h-6 w-6" />
              Task Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Assign and track team tasks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="h-6 w-6" />
              Route Planning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Plan and optimize collection routes</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
