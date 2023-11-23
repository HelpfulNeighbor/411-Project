import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Search: undefined;
    Filter: undefined;
  };
  
  export type RootStackNavProps<T extends keyof RootStackParamList> = {
    navigation: StackNavigationProp<RootStackParamList, T>;
  };