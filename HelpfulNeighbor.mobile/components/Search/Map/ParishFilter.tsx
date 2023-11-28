import * as React from 'react';
import { Button, Card, Checkbox, List} from "react-native-paper";


interface ParishFilterProps {
  onFilterChange: (filterName: string, filterValue: boolean, filterCategory: string) => void;
    checkedParishList: string[];
}

const ParishFilter = ({/*{onFilterChange, checkedParishList} : ParishFilterProps*/}) => {
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


  // const handleCheckboxToggle = (type: string) => {
  //   onFilterChange(type, !checkedParishList.includes(type), 'parisList');
  // };

  // const handleConfirm = () => {
  //   checkedParishList.forEach((type) => {
  //     onFilterChange(type, true, 'parishList'); // Assuming you want to set all checked resource types to true
  //   });
  // };

  const [checkedStates, setCheckedStates] = React.useState<Record<string, boolean>>({}); // Explicitly define the type

  const handleCheckboxToggle = (type: string) => {
    setCheckedStates((prev) => ({ ...prev, [type]: !prev[type] }));
  };
    return(
        <>
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
              <Button>Confirm</Button>
            </Card.Actions>
          </Card>
        </>
    )
}

export default ParishFilter