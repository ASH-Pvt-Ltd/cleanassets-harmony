
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { XCircle, AlertTriangle, Calendar, Filter } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const rejectionData = [
  { month: 'Jan', rejected: 12, resubmitted: 8 },
  { month: 'Feb', rejected: 15, resubmitted: 10 },
  { month: 'Mar', rejected: 8, resubmitted: 6 },
  { month: 'Apr', rejected: 10, resubmitted: 7 },
  { month: 'May', rejected: 14, resubmitted: 11 },
  { month: 'Jun', rejected: 11, resubmitted: 8 },
];

const Rejected = () => {
  const { user } = useAuth();

  // Only verification role should access this page
  if (user?.role !== 'verification') {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Access Restricted</h2>
            <p className="text-muted-foreground">
              You don't have permission to access the rejected records page.
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Rejected Records</h2>
          <p className="text-muted-foreground">Review and manage rejected records</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Rejected</CardTitle>
              <XCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">70</div>
              <p className="text-xs text-muted-foreground mt-1">All time</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">11</div>
              <p className="text-xs text-muted-foreground mt-1">Records rejected</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Resubmission Rate</CardTitle>
              <Filter className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-muted-foreground mt-1">Successfully resubmitted</p>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Rejection Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={rejectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="rejected"
                    name="Rejected"
                    stroke="#EF4444"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="resubmitted"
                    name="Resubmitted"
                    stroke="#10B981"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <Tabs defaultValue="recent" className="space-y-4">
            <TabsList>
              <TabsTrigger value="recent">Recently Rejected</TabsTrigger>
              <TabsTrigger value="reasons">By Reason</TabsTrigger>
              <TabsTrigger value="resubmitted">Resubmitted</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
              <div className="rounded-md border">
                {/* Add recent rejections table here */}
              </div>
            </TabsContent>
            <TabsContent value="reasons">
              <div className="rounded-md border">
                {/* Add rejection reasons table here */}
              </div>
            </TabsContent>
            <TabsContent value="resubmitted">
              <div className="rounded-md border">
                {/* Add resubmitted records table here */}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Rejected;
