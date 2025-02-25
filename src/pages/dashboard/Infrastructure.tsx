
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Map from '@/components/Map';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Infrastructure = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Infrastructure Management</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive overview of waste management infrastructure across Goa
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
          <Card className="order-2 lg:order-1">
            <CardHeader>
              <CardTitle>Asset Location Map</CardTitle>
            </CardHeader>
            <CardContent>
              <Map />
            </CardContent>
          </Card>

          <div className="space-y-6 order-1 lg:order-2">
            <Card>
              <CardHeader>
                <CardTitle>Asset Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Infrastructure Assets */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Infrastructure</h3>
                  <Separator />
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      Waste Processing Plants
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500" />
                      Landfills
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      Composting Units
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      Recycling Facilities
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      Incinerators
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500" />
                      Transfer Stations
                    </li>
                  </ul>
                </div>

                {/* Facilities */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Facilities</h3>
                  <Separator />
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-500" />
                      Collection Centers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-pink-500" />
                      Bio-Medical Waste Centers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      Hazardous Waste Storage
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      E-Waste Collection Centers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-400" />
                      Community Dustbins
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-cyan-500" />
                      Public Toilets & Sanitation
                    </li>
                  </ul>
                </div>

                {/* Fleet */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Fleet</h3>
                  <Separator />
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-600" />
                      Garbage Trucks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-500" />
                      Waste Collection Vehicles
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-400" />
                      Road Sweepers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-600" />
                      Sewage Cleaning Trucks
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-600" />
                      Hazardous Waste Transport
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Infrastructure;
