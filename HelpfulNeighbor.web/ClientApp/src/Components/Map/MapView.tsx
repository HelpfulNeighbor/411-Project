import * as React from 'react';
import Map from 'react-map-gl';

export default function MapView(){

    const TOKEN = process.env.REACT_APP_TOKEN;
    const StreetStyle = "mapbox://styles/itsakennedy/clnow2sah009a01p32cby8otx";

    return(
        <div>
            <Map
                mapboxAccessToken={TOKEN}
                initialViewState={{
                    longitude: -90.47158,
                    latitude: 30.51675,
                    zoom: 6
                }}
                style={{width: 600, height: 400}}
                mapStyle={StreetStyle}
                />
        </div>
    ); 
}