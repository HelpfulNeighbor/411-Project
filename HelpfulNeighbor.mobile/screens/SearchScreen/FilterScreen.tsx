import * as React from 'react';
import Style from '../../screens/SearchScreen/Style';
import { RootStackNavProps } from "../../data/types/NavigationTypes";
import { Button, Text } from "react-native-paper";
import { SafeAreaView, ScrollView } from 'react-native';
import ResourceTypeFilter from '../../components/Search/Map/ResourceTypeFilter';
import ParishFilter from '../../components/Search/Map/ParishFilter';


interface FilterScreenProps extends RootStackNavProps<'Filter'> {
  onFilterChange: (filterName: string, filterValue: boolean, filterCategory: string) => void;
  checkedResourceTypes: string[];
  checkedParishList: string[];
}

  const FilterScreen: React.FC<FilterScreenProps> = ({ navigation, onFilterChange, checkedResourceTypes, checkedParishList }) => {
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    return (
      <SafeAreaView style={Style.container}>
        <ScrollView>
          <Text style={Style.title}>Filter Your Search</Text>
          <ResourceTypeFilter 
            onFilterChange={onFilterChange} 
            checkedResourceTypes={checkedResourceTypes} 
          />
          <Text>{'\n'}</Text>
          <ParishFilter 
            onFilterChange={onFilterChange} 
            checkedParishList={checkedParishList} 
          />
          <Button onPress={handleGoBack}>Go Back</Button>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default FilterScreen;