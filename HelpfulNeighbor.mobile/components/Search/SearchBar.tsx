import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import Style from '../../screens/SearchScreen/Style';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <Searchbar
        style={Style.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        theme={{ colors: { primary: 'white' } }}
    />
  );
};

export default SearchBar;
