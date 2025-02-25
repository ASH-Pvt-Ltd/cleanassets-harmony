
import React, { useEffect, useRef, useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Building2, Truck, Building, CircleDot } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Location = {
  name: string;
  coordinates: [number, number];
};

type AssetCategory = {
  type: string;
  locations: Location[];
};

const assetLocations: AssetCategory[] = [
  {
    type: "Infrastructure",
    locations: [
      { name: "Saligao Waste Plant", coordinates: [73.8192, 15.5535] },
      { name: "Verna Landfill", coordinates: [73.9490, 15.3590] }
    ]
  },
  {
    type: "Facilities",
    locations: [
      { name: "Panjim Collection Center", coordinates: [73.8323, 15.4989] },
      { name: "Margao Treatment Center", coordinates: [73.9583, 15.2832] }
    ]
  },
  {
    type: "Fleet",
    locations: [
      { name: "Central Fleet Hub", coordinates: [73.8278, 15.4925] },
      { name: "South Fleet Station", coordinates: [73.9597, 15.2720] }
    ]
  }
];

const Infrastructure = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNoLXRlY2giLCJhIjoiY203ancxb2wwMDhtejJqc2FtdThqYmcxMiJ9.6IOcY1VUWtyj5lHv8cP0NA';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [74.0855, 15.2993], // Centered on Goa
      zoom: 9,
      pitch: 45,
      maxBounds: [
        [73.5, 14.8], // Southwest coordinates
        [74.5, 15.8]  // Northeast coordinates
      ]
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    assetLocations.forEach(category => {
      category.locations.forEach(location => {
        const marker = document.createElement('div');
        marker.className = 'w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold';
        marker.innerHTML = category.type[0];

        new mapboxgl.Marker({ element: marker })
          .setLngLat(location.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(
                `<strong>${location.name}</strong><br>Type: ${category.type}`
              )
          )
          .addTo(map.current!);
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Infrastructure Management</h2>
          <p className="text-muted-foreground">Monitor and manage infrastructure assets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Facilities</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground mt-1">Across all regions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Sites</CardTitle>
              <CircleDot className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-1">Currently operational</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Under Maintenance</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground mt-1">Scheduled maintenance</p>
            </CardContent>
          </Card>
        </div>

        <Card className="p-6">
          <Tabs defaultValue="map" className="space-y-4">
            <TabsList>
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            <TabsContent value="map" className="p-0">
              <div className="h-[500px] rounded-lg overflow-hidden">
                <div ref={mapContainer} className="h-full w-full" />
              </div>
            </TabsContent>
            <TabsContent value="list">
              <div className="rounded-md border">
                {/* Add list view of infrastructure */}
              </div>
            </TabsContent>
            <TabsContent value="maintenance">
              <div className="rounded-md border">
                {/* Add maintenance schedule */}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Infrastructure;
