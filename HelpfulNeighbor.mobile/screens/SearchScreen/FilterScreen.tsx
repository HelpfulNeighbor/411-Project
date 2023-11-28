// FilterScreen.tsx

import * as React from 'react';
import Style from '../../screens/SearchScreen/Style';
import { Text } from "react-native-paper";
import { SafeAreaView, ScrollView } from 'react-native';
import ResourceTypeFilter from '../../components/Search/Map/ResourceTypeFilter';
import ParishFilter from '../../components/Search/Map/ParishFilter';
import { RootStackNavProps } from '../../data/types/NavigationTypes';

type FilterScreenProps = RootStackNavProps<'Filter'>;

// interface FilterProps {
//   onFilterChange: (filterName: string, filterValue: boolean, filterCategory: string) => void;
//   checkedResourceTypes: string[];
//   checkedParishList: string[];
// }

const FilterScreen: React.FC<FilterScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <Text style={Style.title}>Filter Your Search</Text>
        <ResourceTypeFilter 
          // onFilterChange={onFilterChange} 
          // checkedResourceTypes={checkedResourceTypes} 
        />
        <Text>{'\n'}</Text>
        <ParishFilter 
          // onFilterChange={onFilterChange} 
          // checkedParishList={checkedParishList} 
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;
