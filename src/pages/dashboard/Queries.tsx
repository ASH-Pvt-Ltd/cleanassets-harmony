import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import {
  MessagesSquare,
  CheckCircle2,
  Clock,
  XCircle,
  AlertCircle,
  Search,
  Plus
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const data = [
  { name: 'Jan', queries: 40, resolved: 30 },
  { name: 'Feb', queries: 35, resolved: 28 },
  { name: 'Mar', queries: 50, resolved: 45 },
  { name: 'Apr', queries: 45, resolved: 40 },
  { name: 'May', queries: 60, resolved: 52 },
  { name: 'Jun', queries: 55, resolved: 48 },
];

const statusData = [
  { name: 'Open', value: 35, color: '#3B82F6' },
  { name: 'In Progress', value: 25, color: '#F59E0B' },
  { name: 'Resolved', value: 30, color: '#10B981' },
  { name: 'Closed', value: 10, color: '#6B7280' },
];

const QueryCard = ({ title, value, description, icon: Icon, trend }: {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  trend?: { value: string; positive: boolean };
}) => (
  <Card className="overflow-hidden transition-all hover:shadow-lg">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      <div className="rounded-full bg-primary/10 p-2.5">
        <Icon className="h-4 w-4 text-primary" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex items-baseline space-x-3">
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <span className={`text-xs font-medium ${
            trend.positive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.value}
          </span>
        )}
      </div>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </CardContent>
  </Card>
);

const Queries = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Queries Management
            </h2>
            <p className="text-muted-foreground">Monitor and manage queries in the system</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Query
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QueryCard
            title="Total Queries"
            value="245"
            description="All time queries"
            icon={MessagesSquare}
            trend={{ value: "+12% vs last month", positive: true }}
          />
          <QueryCard
            title="Resolved"
            value="180"
            description="73.4% resolution rate"
            icon={CheckCircle2}
            trend={{ value: "+8% improvement", positive: true }}
          />
          <QueryCard
            title="Pending"
            value="45"
            description="Awaiting response"
            icon={Clock}
            trend={{ value: "-5% vs last week", positive: true }}
          />
          <QueryCard
            title="Escalated"
            value="20"
            description="Requires attention"
            icon={AlertCircle}
            trend={{ value: "+2 new", positive: false }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Query Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={statusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {statusData.map((entry, index) => (
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
              <CardTitle className="text-lg font-semibold">Query Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
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
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center max-w-sm w-full relative">
              <Input
                placeholder="Search queries..."
                className="pr-8"
              />
              <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
            <div className="space-x-2">
              <Button variant="outline">
                Filter
              </Button>
              <Button variant="outline">
                Export
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">All Queries</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-0">
              <div className="rounded-md border">
                {/* Add table or list of queries here */}
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
