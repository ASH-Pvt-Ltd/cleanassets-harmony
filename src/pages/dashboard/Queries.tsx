
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MessagesSquare, CheckCircle2, Clock, XCircle } from 'lucide-react';

const data = [
  { name: 'Jan', queries: 40, resolved: 30 },
  { name: 'Feb', queries: 35, resolved: 28 },
  { name: 'Mar', queries: 50, resolved: 45 },
  { name: 'Apr', queries: 45, resolved: 40 },
  { name: 'May', queries: 60, resolved: 52 },
  { name: 'Jun', queries: 55, resolved: 48 },
];

const QueryCard = ({ title, value, description, icon: Icon }: {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </CardContent>
  </Card>
);

const Queries = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Queries Management</h2>
          <p className="text-muted-foreground">Monitor and manage all queries in the system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QueryCard
            title="Total Queries"
            value="245"
            description="All time queries"
            icon={MessagesSquare}
          />
          <QueryCard
            title="Resolved"
            value="180"
            description="73.4% resolution rate"
            icon={CheckCircle2}
          />
          <QueryCard
            title="Pending"
            value="45"
            description="Awaiting response"
            icon={Clock}
          />
          <QueryCard
            title="Escalated"
            value="20"
            description="Requires attention"
            icon={XCircle}
          />
        </div>

        <Card className="p-6">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-0">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="queries"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                      name="Total Queries"
                    />
                    <Area
                      type="monotone"
                      dataKey="resolved"
                      stackId="2"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      name="Resolved Queries"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="pending">
              <div className="rounded-md border">
                {/* Add table or list of pending queries here */}
              </div>
            </TabsContent>
            <TabsContent value="resolved">
              <div className="rounded-md border">
                {/* Add table or list of resolved queries here */}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Queries;
