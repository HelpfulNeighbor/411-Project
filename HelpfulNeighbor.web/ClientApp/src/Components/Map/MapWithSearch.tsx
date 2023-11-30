import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './Search/SearchBar';
import MapView from './MapView';
import ResourceTypeFilter from './Search/ResourceTypeFilter';
import CityFilter from './Search/CityFilter';
import ParishFilter from './Search/ParishFilter';
import { fetchSearchResults } from '../../Data/Queries/ResourceQueries';
import { SearchResults } from '../../Data/Queries/ResourceQueries';

interface MapWithSearchProps {
  setSearchResults: (results: SearchResults) => void;
}


const MapWithSearch: React.FC<MapWithSearchProps> = ({ setSearchResults }) => {
  const [filterCriteria, setFilterCriteria] = useState({
    filterByResourceType: false,
    resourceType: [] as string[],
    filterByParish: false,
    parish: [] as string[],
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
          resourceType.join(','),
          filterByParish,
          parish.join(',')
        );

        setSearchResults(results); 
      }
    };

    fetchData();
  }, [filterCriteria, searchQuery, setSearchResults]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = useCallback((filterCategory: string, filterName: string, filterValue: boolean) => {
    setFilterCriteria((prevCriteria) => {
      if (filterCategory === 'resourceType') {
        // Update the resourceType based on the selected checkboxes
        const updatedResourceType = filterValue
          ? [...prevCriteria.resourceType, filterName]
          : prevCriteria.resourceType.filter((type) => type !== filterName);

        return {
          ...prevCriteria,
          filterByResourceType: updatedResourceType.length > 0,
          resourceType: updatedResourceType,
        };
      } else if (filterCategory === 'parish') {
        // Update the parish filter similarly to resourceType
        const updatedParish = filterValue
          ? [...prevCriteria.parish, filterName]
          : prevCriteria.parish.filter((p) => p !== filterName);

        return {
          ...prevCriteria,
          filterByParish: updatedParish.length > 0,
          parish: updatedParish,
        };
      } else {
        // Handle other filter types if needed
        return {
          ...prevCriteria,
          [filterCategory]: filterValue,
        };
      }
    });
  }, [setFilterCriteria]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <MapView />
      <SearchBar onSearch={handleSearch} />
      <ResourceTypeFilter onFilterChange={(filterName, filterValue) => handleFilterChange('resourceType', filterName, filterValue)} />
      <CityFilter />
      <ParishFilter onFilterChange={(filterName, filterValue) => handleFilterChange('parish', filterName, filterValue)} />
    </div>
  );
};

export default MapWithSearch;
