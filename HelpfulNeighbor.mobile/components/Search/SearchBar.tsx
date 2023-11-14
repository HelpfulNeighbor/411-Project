import * as React from 'react';
import { IconButton, MD3Colors, Searchbar } from 'react-native-paper';
import Style from '../../screens/SearchScreen/Style';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  return (
    <>
      <Searchbar
          style={Style.searchBar}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
      />
      <IconButton
                style={Style.filter}
                mode='contained'
                icon="filter"
                iconColor={MD3Colors.primary40}
                size={20}
                onPress={() => console.log('Pressed')}
            />
    </>

    
    
  );
};

export default SearchBar;
