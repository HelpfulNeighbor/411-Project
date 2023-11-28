// SearchContainer.tsx
import * as React from 'react';
import SearchBar from './Map/SearchBar';
import FilterScreen from '../../screens/SearchScreen/FilterScreen';
import { SearchResults, fetchSearchResults } from '../../data/queries/ResourceQueries';
import { useEffect, useState } from 'react';
import { RootStackNavProps } from '../../data/types/NavigationTypes';
import { ROUTES } from '../../constants';


interface SearchContainerProps {
  setSearchResults: (results: SearchResults) => void;
}

const SearchContainer: React.FC<SearchContainerProps> = ({ setSearchResults }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filterCriteria, setFilterCriteria] = useState({
    filterByResourceType: false,
    resourceType: [] as string[],
    filterByParish: false,
    parish: [] as string[],
  });

  useEffect(() => {
    const fetchData = async () => {
      const { filterByResourceType, resourceType, filterByParish, parish } = filterCriteria;

      if (searchQuery) {
        const results = await fetchSearchResults(
          searchQuery,
          filterByResourceType,
          resourceType.join(','),
          filterByParish,
          parish.join(',')
        );

        setSearchResults(results);
        console.log('searchResults in SearchContainer:', results);
      }
    };

    fetchData();
  }, [filterCriteria, searchQuery, setSearchResults]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterName: string, filterValue: boolean, filterCategory: string ) => {
    setFilterCriteria((prevCriteria) => {
      if (filterCategory === 'resourceType') {
        const updatedResourceType = filterValue
          ? [...prevCriteria.resourceType, filterName]
          : prevCriteria.resourceType.filter((type) => type !== filterName);

        return {
          ...prevCriteria,
          filterByResourceType: updatedResourceType.length > 0,
          resourceType: updatedResourceType,
        };
      } else if (filterCategory === 'parish') {
        const updatedParish = filterValue
          ? [...prevCriteria.parish, filterName]
          : prevCriteria.parish.filter((p) => p !== filterName);

        return {
          ...prevCriteria,
          filterByParish: updatedParish.length > 0,
          parish: updatedParish,
        };
      } else {
        return {
          ...prevCriteria,
          [filterCategory]: filterValue,
        };
      }
    });
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {/* <FilterScreen 
        onFilterChange={handleFilterChange}
        checkedResourceTypes={filterCriteria.resourceType}
        checkedParishList={filterCriteria.parish}
      /> */}
    </>
  );
};

export default SearchContainer;
