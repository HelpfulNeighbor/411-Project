import React, { useState } from "react";
import { View, StyleSheet,  } from "react-native";
import { useAuth } from "../../authentication/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import ActivityIndicatorComp from "../../components/ActivityIndicator/ActivityIndicator";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  const { onLogin, onRegister } = useAuth();

  const handleCreateAccount = async () => {
    setIsLoading(true);
    const result = await onRegister!(
      firstName,
      lastName,
      email,
      username,
      password
    );

    if (result && result.error) {
      alert(result.msg);
      setIsLoading(false);
    } else {
      const loginResult = await onLogin!(username, password);
      setIsLoading(false);
      navigation.navigate("Home" as never);
    }
  };

  const navigateToLoginScreen = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button mode='contained' onPress={handleCreateAccount}>Create Account</Button>
        <Button mode='contained' onPress={navigateToLoginScreen}>Back to Sign In</Button>
        {isLoading && <ActivityIndicatorComp />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: 10,
    width: "60%",
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
      justifyContent: 'center',
      padding: 24,
      backgroundColor: "#d8e6f5",
      alignItems: 'center',
  },
});

export default Register;
