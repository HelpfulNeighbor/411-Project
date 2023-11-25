import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useAuth } from '../authentication/AuthContext';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { onRegister } = useAuth();

  const handleCreateAccount = async () => {
    const result = await onRegister!(
      firstName,
      lastName,
      email,
      username,
      password
    );
    
    if (result && result.error) {
      alert(result.msg);
    } else {
     // navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
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
        <Button onPress={handleCreateAccount} title="Create Account" />
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

export default Register;
