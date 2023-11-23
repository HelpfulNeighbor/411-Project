import * as React from 'react';
import SearchBar from './Map/SearchBar';
import { SearchResults } from '../../data/queries/ResourceQueries';
import { useState } from 'react';

interface SearchContainerProps {
    setSearchResults: (results: SearchResults) => void;
}
const SearchContainer = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
      };

    return (
        <>
            <SearchBar onSearch={handleSearch}/>
        </>
    )
}

export default SearchContainer;