
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { CheckCircle, AlertCircle, Route } from 'lucide-react';

const OperatorDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Operator Dashboard</h1>
        <div className="space-x-4">
          <span>Welcome, {user?.name}</span>
          <Button variant="outline" onClick={logout}>Logout</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Daily Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">View and complete assigned tasks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Report and track problems</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="h-6 w-6" />
              Today's Route
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">View assigned collection route</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OperatorDashboard;
