import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNav";
import { AuthProvider, useAuth } from "./authentication/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/AuthScreen/LoginScreen";
import RegisterScreen from "./screens/AuthScreen/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Layout></Layout>
      </NavigationContainer>
    </AuthProvider>
  );
}

export const Layout = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{
            headerTitle: "",
          }}
        ></Stack.Screen>
        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
      </>
    </Stack.Navigator>
  );
};