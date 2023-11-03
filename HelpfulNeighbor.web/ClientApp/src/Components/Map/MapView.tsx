import * as React from 'react';
import { useEffect, useState } from 'react';
import Map from 'react-map-gl';
import ShowLocation from './Controls/ShowLocation';

interface Viewport {
    latitude: number;
    longitude: number;
    zoom: number;
  }

export default function MapView() {
    const TOKEN = process.env.REACT_APP_TOKEN;
    const StreetStyle = "mapbox://styles/itsakennedy/clnow2sah009a01p32cby8otx";

    const mapContainerStyle: React.CSSProperties = {
        width: '100%',
        height: '100vh',
        position: 'relative', 
        overflow: 'hidden',
    };

    const [viewport, setViewport] = React.useState<Viewport>({
        latitude: 30.51675,
        longitude: -90.47158,
        zoom: 7,
        
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
          setViewport({
            ...viewport,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            zoom: 16,
          });
        });
      }, []);

    const [centerOnUserLocation, setCenterOnUserLocation] = useState(true);
    const triggerGeolocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
        setViewport({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            zoom: 16,
        });
        setCenterOnUserLocation(true);
        });
    };

    useEffect(() => {
        const mapElement = document.querySelector('.mapboxgl-map');
        if (mapElement) {
          mapElement.addEventListener('move', () => {
            if (centerOnUserLocation) {
              setCenterOnUserLocation(false);
            }
          });
        }
      }, [centerOnUserLocation]);

      console.log("UserCurrentLocation: ", viewport );
    return (
        <div>
            {viewport.latitude && viewport.longitude && (
            <div style={{ width: '100%', height: '100%' }}>
                <div style={mapContainerStyle}>
                    <Map
                    mapboxAccessToken={TOKEN}
                    initialViewState={viewport}
                    style={{ width: '100%', height: '100%' }}
                    mapStyle={StreetStyle}
                    >
                    </Map>
                </div>
            </div>
            )}
            <ShowLocation onTriggerGeolocation={triggerGeolocation}/>
        </div>
    );
}
