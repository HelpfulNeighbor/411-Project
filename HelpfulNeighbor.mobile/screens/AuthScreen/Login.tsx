import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../../authentication/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import ActivityIndicatorComp from "../../components/ActivityIndicator/ActivityIndicator";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useAuth();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    const result = await onLogin!(username, password);
    if (result && result.error) {
      alert(result.msg);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const navigateToCreateAccount = () => {
    navigation.navigate("Register" as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text:string) => setUsername(text)} value={username} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(text: string) => setPassword(text)} value={password} />
        <Button icon="login" mode='contained' onPress={login}>Login</Button>
        <Button mode='contained' onPress={navigateToCreateAccount}>Register</Button>
        {isLoading && <ActivityIndicatorComp />}
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
      flex: 1,
      justifyContent: 'center',
      padding: 24,
      backgroundColor: "#d8e6f5",
      alignItems: 'center',
    },
});

export default Login;