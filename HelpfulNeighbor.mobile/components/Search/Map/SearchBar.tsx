import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import Style from '../../../screens/SearchScreen/Style';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleSubmitEditing = () => {
    handleSearch();
  };

  return (
    <>
      <Searchbar
        style={Style.searchBar}
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        onSubmitEditing={handleSubmitEditing}
      />
    </>
  );
};

export default SearchBar;
