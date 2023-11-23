import * as React from 'react';
import Style from '../../screens/SearchScreen/Style';
import { RootStackNavProps } from "../../data/types/NavigationTypes";
import { Button, Card, Checkbox, List, Text } from "react-native-paper";
import { SafeAreaView, ScrollView } from 'react-native';

type FilterScreenProps = RootStackNavProps<'Filter'>;

const resourceTypes = [
  "Affordable Housing",
  "Charity",
  "Clothing Donation Center",
  "Domestic Violence Help",
  "Food Bank / Distribution Center",
  "Government Help Organizations",
  "Group Housing",
  "Mental Health Treatment Center",
  "Social Service Organization",
  "Veteran Organization",
  "Homeless shelter",
];


const parishList = [
    "Acadia",
    "Ascension",
    "Caldwell",
    "Caddo",
    "Calcasieu",
    "East Baton Rouge",
    "Iberia",
    "Jefferson Davis",
    "Lafayette",
    "Lafourche",
    "Lincoln",
    "Livingston",
    "Madison",
    "Morehouse",
    "Natchitoches",
    "Orleans",
    "Ouachita",
    "Rapides",
    "St. Bernard",
    "St. Landry",
    "St. John the Baptist",
    "St. Landry & Acadia",
    "St. Mary",
    "St. Martin",
    "St. Tammany",
    "Tangipahoa",
    "Terrebonne",
    "Vermilion",
    "Vernon",
    "Washington",
    "Webster",
    "Winn",
  ];

const FilterScreen: React.FC<FilterScreenProps> = ({ navigation }) => {
  const [checkedStates, setCheckedStates] = React.useState<Record<string, boolean>>({}); // Explicitly define the type
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const handleCheckboxToggle = (type: string) => {
    setCheckedStates((prev) => ({ ...prev, [type]: !prev[type] }));
  };
  
    return (
      <SafeAreaView style={Style.container}>
        <ScrollView>
          <Text style ={Style.title}>
              Filter Your Search
          </Text>
          <Card>
            <Card.Title title="Resource" subtitle="Filter Search By Resource Type" />
            <Card.Content>
            <List.Accordion title="Resource Type" left={(props) => <List.Icon {...props} icon="folder" />}>
                  {resourceTypes.map((type) => (
                    <List.Item
                      key={type}
                      title={type}
                      onPress={() => {
                        handleCheckboxToggle(type);
                      }}
                      left={(props) => <Checkbox status={checkedStates[type] ? 'checked' : 'unchecked'} />}
                    />
                  ))}
                </List.Accordion>
            </Card.Content>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Confirm</Button>
            </Card.Actions>
          </Card>
          <Text>
            {'\n'}
          </Text>
          <Card>
            <Card.Title title="Parish" subtitle="Filter Search By Parish" />
            <Card.Content>
            <List.Accordion title="Parish" left={(props) => <List.Icon {...props} icon="folder" />}>
                  {parishList.map((type) => (
                    <List.Item
                      key={type}
                      title={type}
                      onPress={() => {
                        handleCheckboxToggle(type);
                      }}
                      left={(props) => <Checkbox status={checkedStates[type] ? 'checked' : 'unchecked'} />}
                    />
                  ))}
                </List.Accordion>

            </Card.Content>
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Confirm</Button>
            </Card.Actions>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default FilterScreen;
  