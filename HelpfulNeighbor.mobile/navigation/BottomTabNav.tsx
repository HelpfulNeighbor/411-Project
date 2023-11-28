import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
//import { NavigationContainer } from "@react-navigation/native";
import { COLORS, ROUTES } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import StackNav from "./StackNav";
import { useAuth } from "../authentication/AuthContext";
import LoginScreen from "../screens/AuthScreen/LoginScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { authState } = useAuth();

  return (
    <Tab.Navigator
      initialRouteName={ROUTES.SEARCH}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: COLORS.dark,
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.HOME) {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === ROUTES.SEARCH) {
            iconName = focused ? "search-sharp" : "search-outline";
          } else if (route.name === ROUTES.PROFILE) {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === ROUTES.LOGIN) {
            iconName = focused ? "log-in" : "log-in-outline";
          }

                <Tab.Screen name={ROUTES.Profile} component={ProfileScreen}/>
                <Tab.Screen name={ROUTES.SEARCH} component={StackNav}/>
                <Tab.Screen name={ROUTES.HOME} component={HomeScreen}/>

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.SEARCH} component={SearchScreen} />
      {authState?.authenticated && (
        <Tab.Screen
          name={ROUTES.PROFILE}
          component={ProfileScreen} 
        />
      )}
      {!authState?.authenticated && (
        <Tab.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      )}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
  },
});
