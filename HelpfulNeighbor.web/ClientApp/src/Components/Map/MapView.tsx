import * as React from 'react';
import Map from 'react-map-gl';

export default function MapView(){

    const TOKEN = process.env.REACT_APP_TOKEN;
    const StreetStyle = "mapbox://styles/itsakennedy/clnow2sah009a01p32cby8otx";

    const mapContainerStyle = {
        width: '100%', 
        height: '100%', 
    };

    return(
        <div style={{ width: '100%', height: '100%' }}>
            <Map
                mapboxAccessToken={TOKEN}
                initialViewState={{
                    longitude: -90.47158,
                    latitude: 30.51675,
                    zoom: 14
                }}
                style={mapContainerStyle}
                mapStyle={StreetStyle}
                />
        </div>
    ); 
}