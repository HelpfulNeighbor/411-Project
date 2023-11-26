import * as React from 'react';
import { Button, Card, Checkbox, List } from "react-native-paper";


interface ResourcetypeFilterProps {
  onFilterChange: (filterName: string, filterValue: boolean, filterCategory: string) => void;
  checkedResourceTypes: string[];
}


const ResourceTypeFilter = ({onFilterChange, checkedResourceTypes} : ResourcetypeFilterProps ) => {
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

  const handleCheckboxToggle = (type: string) => {
    onFilterChange(type, !checkedResourceTypes.includes(type), 'resourceType');
  };

  const handleConfirm = () => {
    checkedResourceTypes.forEach((type) => {
      onFilterChange(type, true, 'resourceType'); // Assuming you want to set all checked resource types to true
    });
  };

    return(
        <>
            <Card>
            <Card.Title title="Resource" subtitle="Filter Search By Resource Type" />
            <Card.Content>
              <List.Accordion
                title="Resource Type"
                left={(props) => <List.Icon {...props} icon="folder" />}
              >
                {resourceTypes.map((type) => (
                  <List.Item
                    key={type}
                    title={type}
                    onPress={() => handleCheckboxToggle(type)}
                    left={(props) => <Checkbox status={checkedResourceTypes.includes(type) ? 'checked' : 'unchecked'} />}
                  />
                ))}
              </List.Accordion>
            </Card.Content>
            <Card.Actions>
            <Button onPress={handleConfirm}>Confirm</Button>
          </Card.Actions>
          </Card>
        </>
    )
}

export default ResourceTypeFilter;