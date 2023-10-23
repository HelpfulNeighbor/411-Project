import React from 'react';
import SearchBar from './Search/SearchBar';
import MapView from './MapView';
import ResourceTypeFilter from './Search/ResourceTypeFilter';
import CityFilter from './Search/CityFilter';
import ParishFilter from './Search/ParishFilter';

const MapWithSearch = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <MapView />
      <SearchBar />
      <ResourceTypeFilter/>
      <CityFilter/>
      <ParishFilter/>
    </div>
  );
};

export default MapWithSearch;
