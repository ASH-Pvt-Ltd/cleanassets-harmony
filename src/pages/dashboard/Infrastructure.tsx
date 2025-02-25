
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Map from '@/components/Map';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Building,
  Map as MapIcon,
  Truck,
  Plus,
  BarChart3,
  Settings,
  Search,
  Filter
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Infrastructure = () => {
  const facilities = [
    {
      id: "WPP-001",
      name: "Saligao Waste Treatment Plant",
      type: "Processing Plant",
      status: "operational",
      capacity: "150 tonnes/day",
      location: "Saligao"
    },
    {
      id: "LF-002",
      name: "Verna Sanitary Landfill",
      type: "Landfill",
      status: "maintenance",
      capacity: "200 tonnes/day",
      location: "Verna"
    },
    {
      id: "RC-003",
      name: "Panjim Recycling Center",
      type: "Recycling",
      status: "operational",
      capacity: "75 tonnes/day",
      location: "Panjim"
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      operational: "bg-green-100 text-green-800",
      maintenance: "bg-yellow-100 text-yellow-800",
      offline: "bg-red-100 text-red-800"
    };
    return styles[status as keyof typeof styles];
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Infrastructure Management</h1>
            <p className="text-muted-foreground mt-2">
              Monitor and manage waste management facilities across Goa
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Facility
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Facilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground mt-1">
                Across 12 municipalities
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Processing Capacity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">850 t/day</div>
              <p className="text-xs text-muted-foreground mt-1">
                78% utilization
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Operational Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground mt-1">
                2 facilities in maintenance
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Collection Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Target: 100%
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search facilities..."
              className="pl-8"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </Button>
        </div>

        <Tabs defaultValue="map" className="space-y-4">
          <TabsList>
            <TabsTrigger value="map" className="flex items-center">
              <MapIcon className="mr-2 h-4 w-4" />
              Map View
            </TabsTrigger>
            <TabsTrigger value="list" className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              Facilities
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map">
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Map</CardTitle>
                <CardDescription>
                  Geographic distribution of waste management facilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Map />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="list">
            <div className="space-y-4">
              {facilities.map((facility) => (
                <Card key={facility.id} className="hover:bg-accent/50 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{facility.id}</span>
                          <h3 className="font-medium">{facility.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {facility.location} • Capacity: {facility.capacity}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">
                          {facility.type}
                        </Badge>
                        <Badge variant="secondary" className={getStatusBadge(facility.status)}>
                          {facility.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Capacity Utilization</CardTitle>
                  <CardDescription>Monthly processing capacity usage</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Capacity utilization chart will be displayed here</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Operational Metrics</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Operational metrics chart will be displayed here</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Infrastructure;
