import * as React from 'react';
import Style from '../../screens/SearchScreen/Style';
import { RootStackNavProps } from "../../data/types/NavigationTypes";
import { Text } from "react-native-paper";

type FilterScreenProps = RootStackNavProps<'Filter'>;

const FilterScreen: React.FC<FilterScreenProps> = ({ navigation }) => {
  
    return (
      <div>
        <Text>
            Filter Screen
        </Text>
      </div>
    );
  };
  
  export default FilterScreen;
  