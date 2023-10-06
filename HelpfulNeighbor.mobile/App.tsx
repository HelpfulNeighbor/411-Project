import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
       <View style={styles.container}>
        <NavigationContainer>
        <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Press Me"
/>
        </NavigationContainer>
       </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
