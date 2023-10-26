import React, { useState, useEffect } from 'react';
import SearchBar from './Search/SearchBar';
import MapView from './MapView';
import ResourceTypeFilter from './Search/ResourceTypeFilter';
import CityFilter from './Search/CityFilter';
import ParishFilter from './Search/ParishFilter';
import { fetchSearchResults } from '../../Data/Queries/ResourceQueries';
import { Resource } from '../../Data/Types/ResourceTypes';

const MapWithSearch = () => {
  const [searchResults, setSearchResults] = useState<Resource[]>([]);
  const [filterCriteria, setFilterCriteria] = useState({
    filterByResourceType: false,
    resourceType: '',
    filterByParish: false,
    parish: '',
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const {
        filterByResourceType,
        resourceType,
        filterByParish,
        parish,
      } = filterCriteria;

      if (searchQuery) {
        const results = await fetchSearchResults(
          searchQuery,
          filterByResourceType,
          resourceType,
          filterByParish,
          parish
        );
        setSearchResults(results);
        console.log('searchResults in MapWithSearch:', results);
      }
    };

    fetchData();
  }, [filterCriteria, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterName: string, filterValue: boolean) => {
    setFilterCriteria({ ...filterCriteria, [filterName]: filterValue });
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <MapView />
      <SearchBar onSearch={handleSearch} />
      <ResourceTypeFilter onFilterChange={handleFilterChange} />
      <CityFilter />
      <ParishFilter onFilterChange={handleFilterChange} />
    </div>
  );
};

export default MapWithSearch;
