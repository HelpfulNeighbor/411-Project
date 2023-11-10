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

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView style={Style.container}>
            <NativeMap/>
    </SafeAreaView>
  );
};

export default SearchScreen;
