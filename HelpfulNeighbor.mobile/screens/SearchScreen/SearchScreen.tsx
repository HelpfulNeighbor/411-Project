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
      <ScrollView>
        <Text style={Style.title}>Helpful Neighbor</Text>
        <Searchbar
          style={Style.searchBar}
          placeholder="Search for a Community Resource"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        {/* <PaperProvider>
                    <View
                        style={{
                            paddingTop: 50,
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}> */}
        {/* <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor = {<Button onPress={openMenu}>Menu</Button>}>
                                <Menu.Item onPress = {() => {}} title = "Test" /> */}

        
        {/* </Menu> */}
        {/* </View>
                </PaperProvider> */}
            <Card mode={"outlined"}>
              <Card.Content>
                <Card.Cover source={{ uri: " " }} />
              </Card.Content>
              
            </Card>

            <List.Section>
          <List.Accordion
            title="Bookmarked Locations"
            left={(props) => <List.Icon {...props} icon="bookmark" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <Card style={Style.infoCard}>
              <Card.Title title="Bookmarked Locations" />
              <Card.Content>
                <Text variant="bodyMedium">Resource Name</Text>
              </Card.Content>
              <Card.Actions>
                <Button>More Info</Button>
              </Card.Actions>
            </Card>
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
