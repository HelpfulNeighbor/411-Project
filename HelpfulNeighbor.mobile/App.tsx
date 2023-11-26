import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/BottomTabNav";
import { AuthProvider, useAuth } from "./authentication/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/AuthScreen/Login";
import Register from "./screens/AuthScreen/Register";

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
  const { authState } = useAuth();

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
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
      </>
      {/* )} */}
    </Stack.Navigator>
  );
};
