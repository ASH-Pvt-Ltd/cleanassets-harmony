
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Factory, Truck, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Assets = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Asset Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage and monitor all waste management assets
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Asset
          </Button>
        </div>

        <Tabs defaultValue="infrastructure" className="space-y-4">
          <TabsList>
            <TabsTrigger value="infrastructure" className="flex items-center">
              <Building className="mr-2 h-4 w-4" />
              Infrastructure
            </TabsTrigger>
            <TabsTrigger value="facilities" className="flex items-center">
              <Factory className="mr-2 h-4 w-4" />
              Facilities
            </TabsTrigger>
            <TabsTrigger value="fleet" className="flex items-center">
              <Truck className="mr-2 h-4 w-4" />
              Fleet
            </TabsTrigger>
          </TabsList>

          <TabsContent value="infrastructure" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Infrastructure Assets */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Waste Processing Plants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Units</span>
                      <span className="text-2xl font-bold">5</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Operational: 4 | Maintenance: 1
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Landfills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Sites</span>
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Active: 2 | Capacity: 75%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recycling Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Centers</span>
                      <span className="text-2xl font-bold">8</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Operational: 7 | Upgrading: 1
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="facilities" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Facilities Assets */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Collection Centers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Centers</span>
                      <span className="text-2xl font-bold">12</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Active: 10 | Under Construction: 2
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Bio-Medical Centers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Units</span>
                      <span className="text-2xl font-bold">4</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Operational: 4 | Compliance: 100%
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Public Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Units</span>
                      <span className="text-2xl font-bold">150</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Maintained: 142 | Repairs: 8
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="fleet" className="space-y-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Fleet Assets */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Garbage Trucks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Vehicles</span>
                      <span className="text-2xl font-bold">25</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Active: 22 | Maintenance: 3
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Special Vehicles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Units</span>
                      <span className="text-2xl font-bold">15</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Operational: 13 | Service: 2
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Road Sweepers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Total Units</span>
                      <span className="text-2xl font-bold">8</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Active: 7 | Repairs: 1
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Assets;
