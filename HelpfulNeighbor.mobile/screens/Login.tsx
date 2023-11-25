import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL, useAuth } from "../authentication/AuthContext";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, onRegister } = useAuth();
  const navigation = useNavigation();

  const login = async () => {
    const result = await onLogin!(username, password);
    if (result && result.error) {
      alert(result.msg);
    }
  };

  const navigateToCreateAccount = () => {
    // Use the navigation object to navigate to the create account screen
    navigation.navigate('Register' as never);
  };

  // const register = async () => {
  //   const result = await onRegister!(
  //     firstName,
  //     lastName,
  //     email,
  //     username,
  //     password
  //   );
  //   if (result && result.error) {
  //     alert(result.msg);
  //   } else {
  //     login();
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text:string) => setUsername(text)} value={username} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text: string) => setPassword(text)} value={password} />
        <Button onPress={login} title="Sign In" />
        <Button onPress={navigateToCreateAccount} title="Register" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    form: {
        gap: 10,
        width: '60%',
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    },
    container: {
        paddingTop: 225,
        alignItems: 'center',
        width: '100%',
    },
});

export default Login;
