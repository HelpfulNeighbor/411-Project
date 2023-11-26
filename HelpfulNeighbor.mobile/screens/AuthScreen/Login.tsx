import { View, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../authentication/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();
  const navigation = useNavigation();

  const login = async () => {
    const result = await onLogin!(username, password);
    if (result && result.error) {
      alert(result.msg);
    }
  };

  const navigateToCreateAccount = () => {
    navigation.navigate('Register' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text:string) => setUsername(text)} value={username} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text: string) => setPassword(text)} value={password} />
        <Button onPress={login} title="Log In" />
        <Button onPress={navigateToCreateAccount} title="Register" />
      </View>
    </SafeAreaView>
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
