
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

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

const Map = () => {
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

  return <div ref={mapContainer} className="w-full h-full" />;
};

export default Map;
