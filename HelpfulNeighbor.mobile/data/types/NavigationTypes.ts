// NavigationTypes.ts

import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Search: undefined;
  Filter: undefined;
};

export type RootStackNavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};

export type FilterScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Filter'>;
  onFilterChange: (filterName: string, filterValue: boolean, filterCategory: string) => void;
  checkedResourceTypes: string[];
  checkedParishList: string[];
};
