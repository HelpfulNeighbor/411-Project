import React from 'react';
import 'react-native-gesture-handler';
//import { AuthProvider } from "./authentication/AuthContext";
//import AppNav from './navigation/app.nav';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNav';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    
  );
}

export default App;


