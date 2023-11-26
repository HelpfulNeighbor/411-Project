
import * as React from "react";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { RootStackNavProps } from "../../data/types/NavigationTypes";
import Style from "./Style";
import NativeMap from "../../components/Search/Map/NativeMap";
import SearchContainer from "../../components/Search/SearchContainer";
import SearchResultsPanel from "../../components/Search/SearchResults.tsx/SearchResultsPanel";
import { IconButton, MD3Colors } from "react-native-paper";
import { SearchResults } from "../../data/queries/ResourceQueries";

type SearchScreenProps = RootStackNavProps<'Search'>;

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const StackNav = require('../../navigation/StackNav').default;
  const [searchResults, setSearchResults] = useState<SearchResults>({ resources: [] });
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.mapContainer}>
        <NativeMap />
        <View style={Style.overlay}>
          <SearchContainer
          setSearchResults={setSearchResults}
          />
          <SearchResultsPanel searchResults={searchResults} />
          <IconButton
            style={Style.filter}
            mode="contained"
            icon="filter"
            iconColor={MD3Colors.primary40}
            size={20}
            onPress={() => navigation.navigate('Filter')}
          />
          {/* <StackNav/> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
