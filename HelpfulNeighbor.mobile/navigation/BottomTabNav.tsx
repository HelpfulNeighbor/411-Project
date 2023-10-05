import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet} from 'react-native';
//import { NavigationContainer } from "@react-navigation/native";
import { COLORS, ROUTES } from "../constants";
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SearchScreen from "../screens/SearchScreen/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    return(
            <Tab.Navigator initialRouteName={ROUTES.SEARCH}
                screenOptions={({route}) => ({
                    headerShown:false,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarInactiveTintColor: COLORS.dark,
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarIcon:({focused, color, size}) => {
                        let iconName;

                        if(route.name === ROUTES.HOME){
                            iconName = focused ? 'home-sharp' : 'home-outline';
                        } else if(route.name === ROUTES.SEARCH){
                            iconName = focused ? 'search-sharp' : 'search-outline';
                        } else if(route.name === ROUTES.Profile){
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        if (!iconName) {
                            iconName = 'square-sharp'; // Replace with default icon name
                          }

                        return <Icon name={iconName} size={22} color={color}/>
                    },
                })}>
                <Tab.Screen name={ROUTES.HOME} component={HomeScreen}/>
                <Tab.Screen name={ROUTES.SEARCH} component={SearchScreen}/>
                <Tab.Screen name={ROUTES.Profile} component={ProfileScreen}/>

            </Tab.Navigator>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
      position:'absolute',
      backgroundColor: COLORS.white,
      borderTopWidth: 0,
  
    },
  });

