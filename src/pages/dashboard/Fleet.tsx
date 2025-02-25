import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Truck, Car, Bus, AlertCircle, Settings, 
  Calendar, MapPin, Fuel, Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const Fleet = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Fleet Management</h1>
            <p className="text-muted-foreground mt-2">
              Monitor and manage all waste management vehicles
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Service
            </Button>
            <Button>
              <Truck className="mr-2 h-4 w-4" />
              Add Vehicle
            </Button>
          </div>
        </div>

        {/* Fleet Overview Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Vehicles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground mt-1">
                +2 added this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Vehicles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <Progress value={87} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">
                87% fleet availability
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Maintenance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground mt-1">
                4 scheduled, 2 urgent
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Fuel Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground mt-1">
                +3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Fleet Categories */}
        <Tabs defaultValue="garbage-trucks" className="space-y-4">
          <TabsList>
            <TabsTrigger value="garbage-trucks" className="flex items-center">
              <Truck className="mr-2 h-4 w-4" />
              Garbage Trucks
            </TabsTrigger>
            <TabsTrigger value="special-vehicles" className="flex items-center">
              <Car className="mr-2 h-4 w-4" />
              Special Vehicles
            </TabsTrigger>
            <TabsTrigger value="sweepers" className="flex items-center">
              <Bus className="mr-2 h-4 w-4" />
              Road Sweepers
            </TabsTrigger>
          </TabsList>

          <TabsContent value="garbage-trucks" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Vehicle Cards */}
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      Vehicle GOA-{i.toString().padStart(2, '0')}
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                        Active
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          North Goa
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-muted-foreground" />
                          75% Fuel
                        </div>
                        <div className="flex items-center gap-2">
                          <Wrench className="h-4 w-4 text-muted-foreground" />
                          Due in 15 days
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-muted-foreground" />
                          No issues
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        Manage Vehicle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="special-vehicles" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Special Vehicles */}
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      Special Unit {i.toString().padStart(2, '0')}
                      <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                        In Service
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          South Goa
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-muted-foreground" />
                          60% Fuel
                        </div>
                        <div className="flex items-center gap-2">
                          <Wrench className="h-4 w-4 text-muted-foreground" />
                          Servicing
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-muted-foreground" />
                          Minor repairs
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        Manage Vehicle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sweepers" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Road Sweepers */}
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      Sweeper Unit {i.toString().padStart(2, '0')}
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        On Route
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          Panaji
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-muted-foreground" />
                          85% Fuel
                        </div>
                        <div className="flex items-center gap-2">
                          <Wrench className="h-4 w-4 text-muted-foreground" />
                          Due in 30 days
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-muted-foreground" />
                          All clear
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        Manage Vehicle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Fleet;
