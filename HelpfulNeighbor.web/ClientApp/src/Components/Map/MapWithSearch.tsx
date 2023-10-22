import React from 'react';
import SearchBar from './Search/SearchBar';
import MapView from './MapView';

const MapWithSearch = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <MapView />
      <SearchBar />
    </div>
  );
};

export default MapWithSearch;
