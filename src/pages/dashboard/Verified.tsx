
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle2, Calendar, FilterX, Filter } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const verificationData = [
  { month: 'Jan', verified: 85 },
  { month: 'Feb', verified: 78 },
  { month: 'Mar', verified: 92 },
  { month: 'Apr', verified: 88 },
  { month: 'May', verified: 90 },
  { month: 'Jun', verified: 85 },
];

const Verified = () => {
  const { user } = useAuth();

  // Only verification role should access this page
  if (user?.role !== 'verification') {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <FilterX className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Access Restricted</h2>
            <p className="text-muted-foreground">
              You don't have permission to access the verified records page.
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
          <h2 className="text-3xl font-bold tracking-tight">Verified Records</h2>
          <p className="text-muted-foreground">View and manage verified records</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Verified</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">847</div>
              <p className="text-xs text-muted-foreground mt-1">All time</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground mt-1">Records verified</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Verification Rate</CardTitle>
              <Filter className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground mt-1">Average success rate</p>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Verification Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={verificationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="verified" name="Verified Records" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <Tabs defaultValue="recent" className="space-y-4">
            <TabsList>
              <TabsTrigger value="recent">Recently Verified</TabsTrigger>
              <TabsTrigger value="categories">By Category</TabsTrigger>
              <TabsTrigger value="departments">By Department</TabsTrigger>
            </TabsList>
            <TabsContent value="recent">
              <div className="rounded-md border">
                {/* Add recent verifications table here */}
              </div>
            </TabsContent>
            <TabsContent value="categories">
              <div className="rounded-md border">
                {/* Add category-wise table here */}
              </div>
            </TabsContent>
            <TabsContent value="departments">
              <div className="rounded-md border">
                {/* Add department-wise table here */}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Verified;
