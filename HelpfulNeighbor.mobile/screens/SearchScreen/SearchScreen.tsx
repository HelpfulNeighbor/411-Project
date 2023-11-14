import * as React from "react";
import { SafeAreaView, View } from "react-native";
import Style from "./Style";
import NativeMap from "../../components/Search/NativeMap";
import SearchBar from "../../components/Search/SearchBar";
import SearchBarWithResultsPanel from "../../components/Search/SearchResultsPanel";

const SearchScreen = () => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.mapContainer}>
        <NativeMap />
        <View style={Style.overlay}>
          <SearchBar />
          <SearchBarWithResultsPanel />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
