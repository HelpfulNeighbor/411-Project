import * as React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Style from "./Style";
import {
  Searchbar,
  List,
  Button,
  Card,
  Text,
  Menu,
  Divider,
  PaperProvider,
} from "react-native-paper";
import NativeMap from "../../components/Search/NativeMap";
import SearchBar from "../../components/Search/SearchBar";
import TopAppBar from "../../components/TopAppBar";

const SearchScreen = () => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView style={Style.container}>
        {/* <TopAppBar/> */}
        <NativeMap/>
        <SearchBar/>
    </SafeAreaView>
  );
};

export default SearchScreen;
