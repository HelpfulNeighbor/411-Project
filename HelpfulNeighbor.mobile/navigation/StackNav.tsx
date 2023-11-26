// StackNav.tsx

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilterScreen from '../screens/SearchScreen/FilterScreen';
import { ROUTES } from '../constants';
import { FilterScreenProps } from '../data/types/NavigationTypes';

const Stack = createNativeStackNavigator();

const StackNav: React.FC = () => {
  const SearchScreen = require('../screens/SearchScreen/SearchScreen').default;
  return (
    <Stack.Navigator initialRouteName={ROUTES.SEARCH}>
      <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name={ROUTES.FILTER} component={FilterScreen as React.ComponentType<FilterScreenProps>} />
    </Stack.Navigator>
  );
};

export default StackNav;
