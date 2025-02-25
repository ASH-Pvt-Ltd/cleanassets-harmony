
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Truck, Wrench, AlertTriangle, CheckCircle2, Fuel, Clock } from 'lucide-react';

const fleetStatusData = [
  { status: 'Active', value: 65, color: '#10B981' },
  { status: 'Maintenance', value: 20, color: '#F59E0B' },
  { status: 'Repair', value: 10, color: '#EF4444' },
  { status: 'Inactive', value: 5, color: '#6B7280' },
];

const maintenanceData = [
  { month: 'Jan', scheduled: 12, emergency: 3 },
  { month: 'Feb', scheduled: 15, emergency: 2 },
  { month: 'Mar', scheduled: 10, emergency: 4 },
  { month: 'Apr', scheduled: 8, emergency: 1 },
  { month: 'May', scheduled: 14, emergency: 3 },
  { month: 'Jun', scheduled: 11, emergency: 2 },
];

const fuelConsumptionData = [
  { month: 'Jan', consumption: 2500 },
  { month: 'Feb', consumption: 2300 },
  { month: 'Mar', consumption: 2800 },
  { month: 'Apr', consumption: 2400 },
  { month: 'May', consumption: 2600 },
  { month: 'Jun', consumption: 2700 },
];

const Fleet = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Fleet Management</h2>
          <p className="text-muted-foreground">Monitor and manage your vehicle fleet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Vehicles</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground mt-1">In fleet</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Vehicles</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98</div>
              <p className="text-xs text-muted-foreground mt-1">Currently on duty</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">In Maintenance</CardTitle>
              <Wrench className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground mt-1">Scheduled repairs</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Issues Reported</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground mt-1">Require attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Fleet Status Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={fleetStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {fleetStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Maintenance History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={maintenanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="scheduled" name="Scheduled" fill="#3B82F6" />
                    <Bar dataKey="emergency" name="Emergency" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="vehicles" className="space-y-4">
            <TabsList>
              <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              <TabsTrigger value="fuel">Fuel Consumption</TabsTrigger>
            </TabsList>
            <TabsContent value="vehicles" className="space-y-4">
              <div className="rounded-md border">
                {/* Add vehicle listing table here */}
              </div>
            </TabsContent>
            <TabsContent value="maintenance">
              <div className="rounded-md border">
                {/* Add maintenance schedule here */}
              </div>
            </TabsContent>
            <TabsContent value="fuel">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={fuelConsumptionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="consumption"
                      stroke="#6366F1"
                      fill="#6366F1"
                      fillOpacity={0.2}
                      name="Fuel Consumption (L)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Fleet;
