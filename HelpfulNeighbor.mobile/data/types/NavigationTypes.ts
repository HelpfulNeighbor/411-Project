import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Search: undefined;
  Filter: undefined;
};

export type RootStackNavProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};

export type FilterScreenProps = RootStackNavProps<'Filter'> & {
  onFilterChange: (filterName: string, filterValue: boolean, filterCategory: string) => void;
  checkedResourceTypes: string[];
  checkedParishList: string[];
};

export type FilterScreenPropsWithoutNavigation = {
  onFilterChange: (filterName: string, filterValue: boolean, filterCategory: string) => void;
  checkedResourceTypes: string[];
  checkedParishList: string[];
};
