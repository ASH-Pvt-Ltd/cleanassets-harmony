
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

type Location = {
  name: string;
  coordinates: [number, number]; // This is now explicitly a tuple type
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

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    
    // Initialize map only if we have a token
    if (token) {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [74.1240, 15.2993] as [number, number], // Updated coordinates for Goa
        zoom: 9,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add markers for each asset location
      assetLocations.forEach(category => {
        category.locations.forEach(location => {
          const marker = document.createElement('div');
          marker.className = 'w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold';
          marker.innerHTML = category.type[0]; // First letter of category type

          new mapboxgl.Marker({ element: marker })
            .setLngLat(location.coordinates) // Now coordinates are properly typed as [number, number]
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(
                  `<strong>${location.name}</strong><br>Type: ${category.type}`
                )
            )
            .addTo(map.current!);
        });
      });
    }

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [token]);

  return (
    <div className="relative w-full">
      {!token && (
        <div className="absolute inset-0 bg-muted z-10 flex flex-col items-center justify-center p-4 rounded-lg">
          <input
            type="text"
            placeholder="Enter your Mapbox public token"
            className="px-4 py-2 border rounded-lg mb-4 w-full max-w-md"
            onChange={(e) => setToken(e.target.value)}
          />
          <p className="text-sm text-muted-foreground text-center">
            Visit mapbox.com to get your public token
          </p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-[600px] rounded-lg shadow-lg" />
    </div>
  );
};

export default Map;
