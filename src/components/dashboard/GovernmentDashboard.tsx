
import React, { useState } from 'react';
import StatsCard from './StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Truck, ClipboardCheck, AlertCircle, FileCheck, Users2, FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Map from '@/components/Map';

const GovernmentDashboard = () => {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const wasteData = [
    { month: 'Jan', processed: 1200, collected: 1400 },
    { month: 'Feb', processed: 1100, collected: 1300 },
    { month: 'Mar', processed: 1300, collected: 1500 },
    { month: 'Apr', processed: 1400, collected: 1600 },
    { month: 'May', processed: 1200, collected: 1400 },
    { month: 'Jun', processed: 1500, collected: 1700 },
  ];

  const assetUtilization = [
    { name: 'Active', value: 85 },
    { name: 'Maintenance', value: 10 },
    { name: 'Inactive', value: 5 },
  ];

  const COLORS = ['#22c55e', '#eab308', '#ef4444'];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Total Assets"
          value="1,234"
          description="Across all municipalities"
          icon={Building2}
          trend={{ type: 'up', value: '12% vs last month' }}
        />
        <StatsCard
          title="Fleet Status"
          value="85%"
          description="Operational vehicles"
          icon={Truck}
          trend={{ type: 'down', value: '3% vs last week' }}
        />
        <StatsCard
          title="Monthly Reports"
          value="28"
          description="Generated this month"
          icon={FileText}
        />
        <StatsCard
          title="Critical Issues"
          value="3"
          description="Needs immediate attention"
          icon={AlertCircle}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Map Overview */}
        <Card className="lg:row-span-2">
          <CardHeader>
            <CardTitle>Asset Distribution Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <Map />
            </div>
          </CardContent>
        </Card>

        {/* Waste Processing Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Waste Management Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={wasteData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="collected" stroke="#0ea5e9" name="Collected" />
                  <Line type="monotone" dataKey="processed" stroke="#22c55e" name="Processed" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Asset Utilization */}
        <Card>
          <CardHeader>
            <CardTitle>Asset Utilization Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={assetUtilization}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {assetUtilization.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {assetUtilization.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                    <span className="text-sm text-muted-foreground">
                      {entry.name} ({entry.value}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GovernmentDashboard;
